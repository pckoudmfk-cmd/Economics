import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

const STUDENT_NAV = [
  { path: '/student', label: 'Главная', icon: '🏠' },
  { path: '/student/grammar', label: 'Грамматика', icon: '📝' },
  { path: '/student/vocabulary', label: 'Лексика', icon: '📚' },
  { path: '/student/speaking', label: 'Говорение', icon: '🎙️' },
  { path: '/student/writing', label: 'Письмо', icon: '✍️' },
  { path: '/student/dialogue', label: 'Диалоги', icon: '💬' },
]

const TEACHER_NAV = [
  { path: '/teacher', label: 'Главная', icon: '🏠' },
  { path: '/teacher/students', label: 'Студенты', icon: '👥' },
  { path: '/teacher/progress', label: 'Прогресс', icon: '📊' },
  { path: '/teacher/exercises', label: 'Задания', icon: '📋' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = user?.role === 'teacher' ? TEACHER_NAV : STUDENT_NAV

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 shadow-sm">
        <div className="p-5 border-b border-slate-200">
          <h1 className="text-lg font-bold text-blue-900 leading-tight">
            ФОС<br />
            <span className="text-sm font-normal text-slate-500">Банковское дело</span>
          </h1>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {nav.map(item => {
            const active = location.pathname === item.path ||
              (item.path !== '/student' && item.path !== '/teacher' && location.pathname.startsWith(item.path))
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="text-xs text-slate-500 mb-1">{user?.role === 'teacher' ? 'Преподаватель' : 'Студент'}</div>
          <div className="text-sm font-medium text-slate-800 truncate">{user?.full_name}</div>
          {user?.group_name && (
            <div className="text-xs text-slate-400">{user.group_name}</div>
          )}
          <button
            onClick={handleSignOut}
            className="mt-3 w-full text-xs text-slate-500 hover:text-red-600 text-left transition-colors"
          >
            Выйти →
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 inset-x-0 z-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 h-14">
        <span className="font-bold text-blue-900 text-sm">ФОС · Банковское дело</span>
        <button onClick={() => setMenuOpen(v => !v)} className="p-2 rounded-lg hover:bg-slate-100">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-10 pt-14 bg-white">
          <nav className="p-4 space-y-1">
            {nav.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === item.path ? 'bg-blue-50 text-blue-700' : 'text-slate-600'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <button onClick={handleSignOut} className="w-full text-left px-3 py-3 text-sm text-red-600">
              Выйти
            </button>
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-0 pt-14 md:pt-0 overflow-auto">
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
