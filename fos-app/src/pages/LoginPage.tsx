import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

type Role = 'student' | 'teacher'
type TeacherTab = 'login' | 'register'

export default function LoginPage() {
  const { signInStudent, signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [role, setRole] = useState<Role>('student')
  const [teacherTab, setTeacherTab] = useState<TeacherTab>('login')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Student fields
  const [studentName, setStudentName] = useState('')
  const [studentGroup, setStudentGroup] = useState('')

  // Teacher login fields
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // Teacher register fields
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regName, setRegName] = useState('')
  const [teacherCode, setTeacherCode] = useState('')

  function switchRole(r: Role) {
    setRole(r)
    setError('')
  }

  async function handleStudentLogin(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const err = await signInStudent(studentName, studentGroup)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  async function handleTeacherLogin(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const err = await signIn(loginEmail, loginPassword)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  async function handleTeacherRegister(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const err = await signUp(regEmail, regPassword, regName, 'teacher', teacherCode)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 px-8 py-6 text-white">
          <div className="text-2xl font-bold">ФОС</div>
          <div className="text-blue-200 text-sm mt-0.5">Английский язык · Банковское дело</div>
        </div>

        {/* Role picker */}
        <div className="flex border-b border-slate-100">
          <button
            onClick={() => switchRole('student')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              role === 'student' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Студент
          </button>
          <button
            onClick={() => switchRole('teacher')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              role === 'teacher' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Преподаватель
          </button>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          {/* STUDENT FORM */}
          {role === 'student' && (
            <form onSubmit={handleStudentLogin} className="space-y-4">
              <div className="mb-2 text-sm text-slate-500">
                Введите ваши данные — аккаунт создастся автоматически при первом входе.
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">ФИО</label>
                <input
                  type="text" required value={studentName}
                  onChange={e => setStudentName(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Иванов Иван Иванович"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Группа</label>
                <input
                  type="text" required value={studentGroup}
                  onChange={e => setStudentGroup(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="24ОБД1"
                />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                {loading ? 'Входим...' : 'Войти'}
              </button>
            </form>
          )}

          {/* TEACHER FORM */}
          {role === 'teacher' && (
            <>
              <div className="flex gap-4 mb-5">
                <button
                  onClick={() => { setTeacherTab('login'); setError('') }}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                    teacherTab === 'login' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Войти
                </button>
                <button
                  onClick={() => { setTeacherTab('register'); setError('') }}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                    teacherTab === 'register' ? 'border-blue-600 text-blue-700' : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Регистрация
                </button>
              </div>

              {teacherTab === 'login' ? (
                <form onSubmit={handleTeacherLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                    <input
                      type="email" required value={loginEmail}
                      onChange={e => setLoginEmail(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="teacher@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Пароль</label>
                    <input
                      type="password" required value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                    {loading ? 'Входим...' : 'Войти'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleTeacherRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">ФИО</label>
                    <input
                      type="text" required value={regName}
                      onChange={e => setRegName(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иванова Мария Петровна"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                    <input
                      type="email" required value={regEmail}
                      onChange={e => setRegEmail(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="teacher@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Пароль</label>
                    <input
                      type="password" required minLength={6} value={regPassword}
                      onChange={e => setRegPassword(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="минимум 6 символов"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Код преподавателя</label>
                    <input
                      type="password" required value={teacherCode}
                      onChange={e => setTeacherCode(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Уточните у администратора"
                    />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                    {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
