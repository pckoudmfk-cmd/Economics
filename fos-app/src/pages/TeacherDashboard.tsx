import { useState, useEffect } from 'react'
import { useAuth } from '../lib/auth'
import { EXERCISES, MODULE_LABELS } from '../lib/exercises-data'
import { fetchStudentsProgress } from '../lib/attempts'

const MODULE_STATS = Object.entries(MODULE_LABELS).map(([key, label]) => ({
  key,
  label,
  count: EXERCISES.filter(e => e.module === key).length,
  maxScore: EXERCISES.filter(e => e.module === key).reduce((s, e) => s + e.max_score, 0),
}))

const MODULE_KEYS = ['grammar', 'vocabulary', 'speaking', 'writing', 'dialogue'] as const
type ModuleKey = typeof MODULE_KEYS[number]

interface StudentRow {
  id: string
  name: string
  group: string
  scores: Record<ModuleKey, number>
  attemptsCount: number
}

function scoreColor(score: number) {
  if (score >= 85) return 'text-green-600'
  if (score >= 70) return 'text-blue-600'
  if (score >= 55) return 'text-amber-600'
  if (score === 0) return 'text-slate-300'
  return 'text-red-600'
}

function scoreBarColor(score: number) {
  if (score >= 85) return 'bg-green-500'
  if (score >= 70) return 'bg-blue-500'
  if (score >= 55) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function TeacherDashboard() {
  const { user } = useAuth()
  const [students, setStudents] = useState<StudentRow[]>([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState('')
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  async function load() {
    setLoading(true)
    setFetchError('')
    const { data, error } = await fetchStudentsProgress()
    if (error) {
      setFetchError(error.message)
      setLoading(false)
      return
    }
    if (data) {
      const rows: StudentRow[] = data.map((profile: any) => {
        const scores = {} as Record<ModuleKey, number>
        for (const mod of MODULE_KEYS) {
          const modAttempts = (profile.attempts ?? []).filter((a: any) => a.module === mod)
          if (modAttempts.length > 0) {
            const bestPct = Math.max(...modAttempts.map((a: any) => (a.score / a.max_score) * 100))
            scores[mod] = Math.round(bestPct)
          } else {
            scores[mod] = 0
          }
        }
        return {
          id: profile.id,
          name: profile.full_name,
          group: profile.group_name ?? '—',
          scores,
          attemptsCount: (profile.attempts ?? []).length,
        }
      })
      setStudents(rows)
      setLastUpdated(new Date())
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const activeStudents = students.filter(s => s.attemptsCount > 0)

  const avgByModule = MODULE_KEYS.reduce<Record<ModuleKey, number>>((acc, key) => {
    const active = students.filter(s => s.scores[key] > 0)
    acc[key] = active.length > 0
      ? Math.round(active.reduce((s, st) => s + st.scores[key], 0) / active.length)
      : 0
    return acc
  }, {} as Record<ModuleKey, number>)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Панель преподавателя</h2>
          <p className="text-slate-500 mt-1">Добрый день, {user?.full_name}. Обзор прогресса студентов.</p>
          {lastUpdated && (
            <p className="text-xs text-slate-400 mt-0.5">
              Обновлено: {lastUpdated.toLocaleTimeString('ru-RU')}
            </p>
          )}
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="shrink-0 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Загрузка...' : 'Обновить'}
        </button>
      </div>

      {fetchError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          Ошибка загрузки данных: {fetchError}
          <br />
          <span className="text-xs text-red-500 mt-1 block">
            Убедитесь, что в Vercel заданы переменные VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY, и что схема базы данных создана.
          </span>
        </div>
      )}

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-blue-700">{loading ? '—' : students.length}</div>
          <div className="text-xs text-slate-500 mt-1">Студентов</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-blue-700">{loading ? '—' : activeStudents.length}</div>
          <div className="text-xs text-slate-500 mt-1">Активных</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-green-600">{EXERCISES.length}</div>
          <div className="text-xs text-slate-500 mt-1">Заданий</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-slate-700">5</div>
          <div className="text-xs text-slate-500 mt-1">Разделов</div>
        </div>
      </div>

      {/* Module averages */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="font-semibold text-slate-800 mb-4">Средние баллы по разделам</h3>
        {loading ? (
          <div className="text-sm text-slate-400 py-4 text-center">Загрузка...</div>
        ) : (
          <div className="space-y-3">
            {MODULE_KEYS.map(key => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-28 text-sm text-slate-600 shrink-0">{MODULE_LABELS[key]}</div>
                <div className="flex-1 bg-slate-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${scoreBarColor(avgByModule[key])} transition-all`}
                    style={{ width: `${avgByModule[key]}%` }}
                  />
                </div>
                <div className={`w-12 text-sm font-semibold text-right ${scoreColor(avgByModule[key])}`}>
                  {avgByModule[key] > 0 ? `${avgByModule[key]}%` : '—'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Students table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Список студентов</h3>
        </div>
        {loading ? (
          <div className="px-5 py-8 text-sm text-slate-400 text-center">Загрузка данных...</div>
        ) : students.length === 0 ? (
          <div className="px-5 py-8 text-sm text-slate-400 text-center">
            {fetchError ? 'Не удалось загрузить данные' : 'Студенты ещё не зарегистрировались'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Студент</th>
                  <th className="text-left px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Группа</th>
                  {MODULE_KEYS.map(k => (
                    <th key={k} className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {MODULE_LABELS[k].slice(0, 3)}
                    </th>
                  ))}
                  <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Зад.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map(st => (
                  <tr key={st.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-slate-800">{st.name}</td>
                    <td className="px-3 py-3 text-slate-500">{st.group}</td>
                    {MODULE_KEYS.map(k => (
                      <td key={k} className={`px-3 py-3 text-center font-semibold ${scoreColor(st.scores[k])}`}>
                        {st.scores[k] > 0 ? `${st.scores[k]}%` : '—'}
                      </td>
                    ))}
                    <td className="px-3 py-3 text-center text-slate-500">{st.attemptsCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Exercises overview */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="font-semibold text-slate-800 mb-4">Банк заданий</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {MODULE_STATS.map(m => (
            <div key={m.key} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
              <span className="text-sm text-slate-700">{m.label}</span>
              <div className="flex gap-4 text-xs text-slate-500">
                <span>{m.count} заданий</span>
                <span className="font-medium">до {m.maxScore} б.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
