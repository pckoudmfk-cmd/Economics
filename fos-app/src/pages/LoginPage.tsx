import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

type Role = 'student' | 'teacher'
type Tab = 'login' | 'register'

export default function LoginPage() {
  const { signInStudent, signUpStudent, signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [role, setRole] = useState<Role>('student')
  const [tab, setTab] = useState<Tab>('login')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Student login
  const [sLoginName, setSLoginName] = useState('')
  const [sLoginGroup, setSLoginGroup] = useState('')
  const [sLoginPassword, setSLoginPassword] = useState('')

  // Student register
  const [sRegName, setSRegName] = useState('')
  const [sRegGroup, setSRegGroup] = useState('')
  const [sRegPassword, setSRegPassword] = useState('')

  // Teacher login
  const [tLoginEmail, setTLoginEmail] = useState('')
  const [tLoginPassword, setTLoginPassword] = useState('')

  // Teacher register
  const [tRegName, setTRegName] = useState('')
  const [tRegEmail, setTRegEmail] = useState('')
  const [tRegPassword, setTRegPassword] = useState('')
  const [tRegCode, setTRegCode] = useState('')

  function switchRole(r: Role) { setRole(r); setError('') }
  function switchTab(t: Tab) { setTab(t); setError('') }

  async function handleStudentLogin(e: FormEvent) {
    e.preventDefault(); setError(''); setLoading(true)
    const err = await signInStudent(sLoginName, sLoginGroup, sLoginPassword)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  async function handleStudentRegister(e: FormEvent) {
    e.preventDefault(); setError(''); setLoading(true)
    const err = await signUpStudent(sRegName, sRegGroup, sRegPassword)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  async function handleTeacherLogin(e: FormEvent) {
    e.preventDefault(); setError(''); setLoading(true)
    const err = await signIn(tLoginEmail, tLoginPassword)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  async function handleTeacherRegister(e: FormEvent) {
    e.preventDefault(); setError(''); setLoading(true)
    const err = await signUp(tRegEmail, tRegPassword, tRegName, 'teacher', tRegCode)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  const input = "w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="bg-blue-900 px-8 py-6 text-white">
          <div className="text-2xl font-bold">ФОС</div>
          <div className="text-blue-200 text-sm mt-0.5">Английский язык · Банковское дело</div>
        </div>

        {/* Role tabs */}
        <div className="flex border-b border-slate-100">
          {(['student', 'teacher'] as Role[]).map(r => (
            <button key={r} onClick={() => switchRole(r)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                role === r ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:text-slate-700'
              }`}>
              {r === 'student' ? 'Студент' : 'Преподаватель'}
            </button>
          ))}
        </div>

        {/* Login / Register sub-tabs */}
        <div className="flex gap-6 px-8 pt-5">
          {(['login', 'register'] as Tab[]).map(t => (
            <button key={t} onClick={() => switchTab(t)}
              className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                tab === t ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}>
              {t === 'login' ? 'Войти' : 'Регистрация'}
            </button>
          ))}
        </div>

        <div className="px-8 pb-8 pt-4">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          {/* STUDENT LOGIN */}
          {role === 'student' && tab === 'login' && (
            <form onSubmit={handleStudentLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">ФИО</label>
                <input type="text" required value={sLoginName} onChange={e => setSLoginName(e.target.value)}
                  className={input} placeholder="Иванов Иван Иванович" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Группа</label>
                <input type="text" required value={sLoginGroup} onChange={e => setSLoginGroup(e.target.value)}
                  className={input} placeholder="24ОБД1" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Пароль</label>
                <input type="password" required value={sLoginPassword} onChange={e => setSLoginPassword(e.target.value)}
                  className={input} placeholder="••••••••" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                {loading ? 'Входим...' : 'Войти'}
              </button>
            </form>
          )}

          {/* STUDENT REGISTER */}
          {role === 'student' && tab === 'register' && (
            <form onSubmit={handleStudentRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">ФИО</label>
                <input type="text" required value={sRegName} onChange={e => setSRegName(e.target.value)}
                  className={input} placeholder="Иванов Иван Иванович" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Группа</label>
                <input type="text" required value={sRegGroup} onChange={e => setSRegGroup(e.target.value)}
                  className={input} placeholder="24ОБД1" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Пароль</label>
                <input type="password" required minLength={6} value={sRegPassword} onChange={e => setSRegPassword(e.target.value)}
                  className={input} placeholder="минимум 6 символов" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
              </button>
            </form>
          )}

          {/* TEACHER LOGIN */}
          {role === 'teacher' && tab === 'login' && (
            <form onSubmit={handleTeacherLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                <input type="email" required value={tLoginEmail} onChange={e => setTLoginEmail(e.target.value)}
                  className={input} placeholder="teacher@example.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Пароль</label>
                <input type="password" required value={tLoginPassword} onChange={e => setTLoginPassword(e.target.value)}
                  className={input} placeholder="••••••••" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                {loading ? 'Входим...' : 'Войти'}
              </button>
            </form>
          )}

          {/* TEACHER REGISTER */}
          {role === 'teacher' && tab === 'register' && (
            <form onSubmit={handleTeacherRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">ФИО</label>
                <input type="text" required value={tRegName} onChange={e => setTRegName(e.target.value)}
                  className={input} placeholder="Иванова Мария Петровна" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                <input type="email" required value={tRegEmail} onChange={e => setTRegEmail(e.target.value)}
                  className={input} placeholder="teacher@example.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Пароль</label>
                <input type="password" required minLength={6} value={tRegPassword} onChange={e => setTRegPassword(e.target.value)}
                  className={input} placeholder="минимум 6 символов" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Код преподавателя</label>
                <input type="password" required value={tRegCode} onChange={e => setTRegCode(e.target.value)}
                  className={input} placeholder="Уточните у администратора" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
