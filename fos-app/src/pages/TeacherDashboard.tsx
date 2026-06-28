import { useAuth } from '../lib/auth'
import { EXERCISES, MODULE_LABELS } from '../lib/exercises-data'

const MODULE_STATS = Object.entries(MODULE_LABELS).map(([key, label]) => ({
  key,
  label,
  count: EXERCISES.filter(e => e.module === key).length,
  maxScore: EXERCISES.filter(e => e.module === key).reduce((s, e) => s + e.max_score, 0),
}))

// Mock student data for UI demonstration
const MOCK_STUDENTS = [
  { name: 'Иванова Анна Петровна', group: 'БД-301', grammar: 85, vocabulary: 90, speaking: 72, writing: 68, dialogue: 75 },
  { name: 'Петров Сергей Иванович', group: 'БД-301', grammar: 70, vocabulary: 65, speaking: 80, writing: 78, dialogue: 82 },
  { name: 'Сидорова Мария Сергеевна', group: 'БД-302', grammar: 95, vocabulary: 88, speaking: 91, writing: 85, dialogue: 88 },
  { name: 'Кузнецов Алексей Дмитриевич', group: 'БД-302', grammar: 60, vocabulary: 72, speaking: 55, writing: 63, dialogue: 70 },
  { name: 'Смирнова Елена Владимировна', group: 'БД-301', grammar: 78, vocabulary: 80, speaking: 85, writing: 90, dialogue: 79 },
]

const MODULE_KEYS = ['grammar', 'vocabulary', 'speaking', 'writing', 'dialogue'] as const
type ModuleKey = typeof MODULE_KEYS[number]

function scoreColor(score: number) {
  if (score >= 85) return 'text-green-600'
  if (score >= 70) return 'text-blue-600'
  if (score >= 55) return 'text-amber-600'
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

  const avgByModule = MODULE_KEYS.reduce<Record<ModuleKey, number>>((acc, key) => {
    acc[key] = Math.round(MOCK_STUDENTS.reduce((s, st) => s + st[key], 0) / MOCK_STUDENTS.length)
    return acc
  }, {} as Record<ModuleKey, number>)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Панель преподавателя</h2>
        <p className="text-slate-500 mt-1">Добрый день, {user?.full_name}. Обзор прогресса студентов.</p>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg">
          ⚠️ Демо-режим — база данных Supabase не подключена. Данные студентов — примерные.
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-blue-700">{MOCK_STUDENTS.length}</div>
          <div className="text-xs text-slate-500 mt-1">Студентов</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-blue-700">{EXERCISES.length}</div>
          <div className="text-xs text-slate-500 mt-1">Заданий</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-green-600">
            {Math.round(Object.values(avgByModule).reduce((a, b) => a + b, 0) / MODULE_KEYS.length)}%
          </div>
          <div className="text-xs text-slate-500 mt-1">Ср. балл группы</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-slate-700">5</div>
          <div className="text-xs text-slate-500 mt-1">Разделов</div>
        </div>
      </div>

      {/* Module averages */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="font-semibold text-slate-800 mb-4">Средние баллы по разделам</h3>
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
              <div className={`w-10 text-sm font-semibold text-right ${scoreColor(avgByModule[key])}`}>
                {avgByModule[key]}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Список студентов</h3>
        </div>
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
                <th className="text-center px-3 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Ср.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_STUDENTS.map(st => {
                const avg = Math.round(MODULE_KEYS.reduce((s, k) => s + st[k], 0) / MODULE_KEYS.length)
                return (
                  <tr key={st.name} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-slate-800">{st.name}</td>
                    <td className="px-3 py-3 text-slate-500">{st.group}</td>
                    {MODULE_KEYS.map(k => (
                      <td key={k} className={`px-3 py-3 text-center font-semibold ${scoreColor(st[k])}`}>
                        {st[k]}
                      </td>
                    ))}
                    <td className={`px-3 py-3 text-center font-bold ${scoreColor(avg)}`}>{avg}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
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
