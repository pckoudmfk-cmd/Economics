import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { supabase } from './supabase'
import type { UserProfile } from './types'

export const TEACHER_CODE = 'PREP2024'
const STUDENT_PASSWORD = 'FosStudent2024!'

function studentCredentials(fullName: string, groupName: string) {
  const str = `${fullName.trim()}|${groupName.trim()}`.toLowerCase()
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  const id = Math.abs(hash).toString(36).padStart(10, '0')
  return { email: `s_${id}@fos.local`, password: STUDENT_PASSWORD }
}

interface AuthContextValue {
  user: UserProfile | null
  loading: boolean
  signInStudent: (fullName: string, groupName: string) => Promise<string | null>
  signIn: (email: string, password: string) => Promise<string | null>
  signUp: (
    email: string,
    password: string,
    fullName: string,
    role: 'teacher',
    teacherCode: string
  ) => Promise<string | null>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        fetchProfile(data.session.user.id)
      } else {
        setLoading(false)
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchProfile(session.user.id)
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    setUser(data ?? null)
    setLoading(false)
  }

  async function signInStudent(fullName: string, groupName: string): Promise<string | null> {
    if (!fullName.trim()) return 'Введите ФИО'
    if (!groupName.trim()) return 'Введите номер группы'

    const { email, password } = studentCredentials(fullName, groupName)

    // Try to sign in first (returning student)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) return null

    // Account doesn't exist — register automatically
    const { data, error: signUpError } = await supabase.auth.signUp({ email, password })
    if (signUpError) return signUpError.message

    if (data.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: data.user.id,
        email,
        full_name: fullName.trim(),
        role: 'student',
        group_name: groupName.trim(),
      })
      if (profileError) return profileError.message

      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
      if (signInError) return signInError.message
    }

    return null
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error?.message ?? null
  }

  async function signUp(
    email: string,
    password: string,
    fullName: string,
    role: 'teacher',
    teacherCode: string
  ) {
    if (teacherCode !== TEACHER_CODE) {
      return 'Неверный код преподавателя. Обратитесь к администратору.'
    }

    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) return error.message
    if (data.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: data.user.id,
        email,
        full_name: fullName,
        role,
        group_name: null,
      })
      if (profileError) return profileError.message
    }
    return null
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInStudent, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
