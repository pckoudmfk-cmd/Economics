import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

type Tab = 'login' | 'register'

export default function LoginPage() {
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('login')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regName, setRegName] = useState('')
  const [regRole, setRegRole] = useState<'student' | 'teacher'>('student')
  const [regGroup, setRegGroup] = useState('')
  const [teacherCode, setTeacherCode] = useState('')

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const err = await signIn(loginEmail, loginPassword)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  async function handleRegister(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const err = await signUp(
      regEmail, regPassword, regName, regRole,
      regGroup || undefined,
      regRole === 'teacher' ? teacherCode : undefined
    )
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-900 px-8 py-6 text-white">
          <div className="text-2xl font-bold">ФОС</div>
          <div className="text-blue-200 text-sm mt-0.5">Английский язык · Банковское дело</div>
        </div>

        <div className="flex border-b border-slate-100">
          <button
            onClick={() => { setTab('login'); setError('') }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              tab === 'login' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Войти
          </button>
          <button
            onClick={() => { setTab('register'); setError('') }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              tab === 'register' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Регистрация
          </button>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          {tab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                <input
                  type="email" required value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
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
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">ФИО</label>
                <input
                  type="text" required value={regName}
                  onChange={e => setRegName(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Иванов Иван Иванович"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
                <input
                  type="email" required value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block text-xs font-medium text-slate-600 mb-2">Роль</label>
                <div className="flex gap-3">
                  <label className={`flex-1 flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer text-sm transition-colors ${
                    regRole === 'student' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'
                  }`}>
                    <input type="radio" value="student" checked={regRole === 'student'} onChange={() => setRegRole('student')} className="sr-only" />
                    🎓 Студент
                  </label>
                  <label className={`flex-1 flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer text-sm transition-colors ${
                    regRole === 'teacher' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'
                  }`}>
                    <input type="radio" value="teacher" checked={regRole === 'teacher'} onChange={() => setRegRole('teacher')} className="sr-only" />
                    👩‍🏫 Преподаватель
                  </label>
                </div>
              </div>

              {regRole === 'student' && (
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Группа</label>
                  <input
                    type="text" value={regGroup}
                    onChange={e => setRegGroup(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="БД-301"
                  />
                </div>
              )}

              {regRole === 'teacher' && (
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Код преподавателя
                  </label>
                  <input
                    type="password" required value={teacherCode}
                    onChange={e => setTeacherCode(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите код (уточните у администратора)"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    Код выдаётся преподавателям администратором системы
                  </p>
                </div>
              )}

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
