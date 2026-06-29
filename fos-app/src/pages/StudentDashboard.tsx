import { Link } from 'react-router-dom'
import { EXERCISES, MODULE_LABELS } from '../lib/exercises-data'

const MODULES = [
  { key: 'grammar',    icon: '📝', path: '/student/grammar',    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100' },
  { key: 'vocabulary', icon: '📚', path: '/student/vocabulary', color: 'bg-green-50 border-green-200 hover:bg-green-100' },
  { key: 'speaking',   icon: '🎙️', path: '/student/speaking',   color: 'bg-purple-50 border-purple-200 hover:bg-purple-100' },
  { key: 'writing',    icon: '✍️', path: '/student/writing',    color: 'bg-amber-50 border-amber-200 hover:bg-amber-100' },
  { key: 'dialogue',   icon: '💬', path: '/student/dialogue',   color: 'bg-rose-50 border-rose-200 hover:bg-rose-100' },
]

export default function StudentDashboard() {
  const countByModule = MODULES.reduce<Record<string, number>>((acc, m) => {
    acc[m.key] = EXERCISES.filter(e => e.module === m.key).length
    return acc
  }, {})

  const greeting = (() => {
    const h = new Date().getHours()
    if (h < 12) return 'Доброе утро'
    if (h < 18) return 'Добрый день'
    return 'Добрый вечер'
  })()

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{greeting}!</h2>
        <p className="text-slate-500 mt-1">
          Добро пожаловать в интерактивный ФОС по английскому языку для банковского дела.
        </p>
      </div>

      {/* Modules grid */}
      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Разделы</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map(m => (
            <Link
              key={m.key}
              to={m.path}
              className={`border rounded-xl p-5 transition-all ${m.color} group`}
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                {MODULE_LABELS[m.key]}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                {countByModule[m.key]} {countByModule[m.key] === 1 ? 'задание' : 'заданий'}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Info block */}
      <div className="bg-blue-900 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-2">О курсе</h3>
        <p className="text-blue-200 text-sm leading-relaxed">
          Этот курс охватывает все компоненты ФОС: грамматику, профессиональную лексику,
          устную речь (презентации и диалоги), письмо (деловые письма и эссе) и групповые дискуссии.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="bg-blue-800 rounded-lg py-3">
            <div className="text-2xl font-bold">{EXERCISES.length}</div>
            <div className="text-xs text-blue-300 mt-0.5">Заданий</div>
          </div>
          <div className="bg-blue-800 rounded-lg py-3">
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs text-blue-300 mt-0.5">Разделов</div>
          </div>
        </div>
      </div>
    </div>
  )
}
