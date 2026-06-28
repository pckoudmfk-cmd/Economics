import { useState } from 'react'
import { EXERCISES } from '../../lib/exercises-data'
import type { Exercise, FillBlankExercise, TransformExercise, ErrorCorrectionExercise } from '../../lib/types'

const exercises = EXERCISES.filter(e => e.module === 'grammar')

function FillBlankExerciseView({ ex }: { ex: Exercise }) {
  const content = ex.content as FillBlankExercise
  const [answers, setAnswers] = useState<string[]>(Array(content.sentences.length).fill(''))
  const [checked, setChecked] = useState(false)

  function check() { setChecked(true) }
  function reset() { setAnswers(Array(content.sentences.length).fill('')); setChecked(false) }

  const score = answers.filter((a, i) => a.trim().toLowerCase() === content.sentences[i].answer.toLowerCase()).length

  return (
    <div className="space-y-5">
      {content.sentences.map((s, i) => {
        const correct = answers[i]?.trim().toLowerCase() === s.answer.toLowerCase()
        const parts = s.text.split('___')

        return (
          <div key={i} className="space-y-2">
            <div className="text-sm text-slate-700 flex flex-wrap items-center gap-1">
              {parts.map((part, pi) => (
                <span key={pi}>
                  <span>{part}</span>
                  {pi < parts.length - 1 && (
                    s.options ? (
                      <select
                        disabled={checked}
                        value={answers[i]}
                        onChange={e => {
                          const next = [...answers]; next[i] = e.target.value; setAnswers(next)
                        }}
                        className={`mx-1 border rounded px-2 py-1 text-sm focus:outline-none ${
                          checked ? (correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-slate-300'
                        }`}
                      >
                        <option value="">—</option>
                        {s.options!.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input
                        disabled={checked}
                        value={answers[i]}
                        onChange={e => {
                          const next = [...answers]; next[i] = e.target.value; setAnswers(next)
                        }}
                        className={`mx-1 border rounded px-2 py-0.5 text-sm w-36 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                          checked ? (correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-slate-300'
                        }`}
                        placeholder="ответ"
                      />
                    )
                  )}
                </span>
              ))}
            </div>
            {checked && (
              <div className={`text-xs ${correct ? 'text-green-600' : 'text-red-600'}`}>
                {correct ? '✓ Верно' : `✗ Правильный ответ: ${s.answer}`}
              </div>
            )}
          </div>
        )
      })}

      <div className="flex items-center gap-3 pt-2">
        {!checked ? (
          <button onClick={check} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            Проверить
          </button>
        ) : (
          <>
            <div className={`text-sm font-semibold ${score === content.sentences.length ? 'text-green-600' : 'text-amber-600'}`}>
              {score} / {content.sentences.length} верно
            </div>
            <button onClick={reset} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50">
              Попробовать снова
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function TransformExerciseView({ ex }: { ex: Exercise }) {
  const content = ex.content as TransformExercise
  const [answers, setAnswers] = useState<string[]>(Array(content.sentences.length).fill(''))
  const [checked, setChecked] = useState(false)

  const score = answers.filter((a, i) =>
    a.trim().toLowerCase() === content.sentences[i].answer.toLowerCase()
  ).length

  return (
    <div className="space-y-5">
      {content.sentences.map((s, i) => {
        const correct = answers[i]?.trim().toLowerCase() === s.answer.toLowerCase()
        return (
          <div key={i} className="space-y-2 bg-slate-50 rounded-lg p-3">
            <div className="text-sm text-slate-700 italic">"{s.original}"</div>
            <div className="text-xs text-slate-500">Задание: {s.instruction}</div>
            <textarea
              disabled={checked}
              value={answers[i]}
              onChange={e => { const n = [...answers]; n[i] = e.target.value; setAnswers(n) }}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none ${
                checked ? (correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-slate-300 bg-white'
              }`}
              rows={2}
              placeholder="Ваш ответ..."
            />
            {checked && (
              <div className={`text-xs ${correct ? 'text-green-600' : 'text-red-600'}`}>
                {correct ? '✓ Верно' : `✗ Образец: ${s.answer}`}
              </div>
            )}
          </div>
        )
      })}

      <div className="flex items-center gap-3">
        {!checked ? (
          <button onClick={() => setChecked(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            Проверить
          </button>
        ) : (
          <>
            <div className={`text-sm font-semibold ${score === content.sentences.length ? 'text-green-600' : 'text-amber-600'}`}>
              {score} / {content.sentences.length} верно
            </div>
            <button onClick={() => { setAnswers(Array(content.sentences.length).fill('')); setChecked(false) }}
              className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50">
              Попробовать снова
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function ErrorCorrectionView({ ex }: { ex: Exercise }) {
  const content = ex.content as ErrorCorrectionExercise
  const [answers, setAnswers] = useState<string[]>(content.sentences.map(s => s.wrong))
  const [checked, setChecked] = useState(false)

  const score = answers.filter((a, i) =>
    a.trim().toLowerCase() === content.sentences[i].correct.toLowerCase()
  ).length

  return (
    <div className="space-y-4">
      {content.sentences.map((s, i) => {
        const correct = answers[i]?.trim().toLowerCase() === s.correct.toLowerCase()
        return (
          <div key={i} className="space-y-2">
            <div className="text-xs text-slate-500 uppercase tracking-wide">Предложение {i + 1}</div>
            <textarea
              disabled={checked}
              value={answers[i]}
              onChange={e => { const n = [...answers]; n[i] = e.target.value; setAnswers(n) }}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none ${
                checked ? (correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-slate-300'
              }`}
              rows={2}
            />
            {checked && (
              <div className={`text-xs ${correct ? 'text-green-600' : 'text-red-600'}`}>
                {correct ? '✓ Верно' : `✗ Правильно: ${s.correct}`}
              </div>
            )}
          </div>
        )
      })}

      <div className="flex items-center gap-3 pt-2">
        {!checked ? (
          <button onClick={() => setChecked(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            Проверить
          </button>
        ) : (
          <>
            <div className={`text-sm font-semibold ${score === content.sentences.length ? 'text-green-600' : 'text-amber-600'}`}>
              {score} / {content.sentences.length} верно
            </div>
            <button
              onClick={() => { setAnswers(content.sentences.map(s => s.wrong)); setChecked(false) }}
              className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50"
            >
              Попробовать снова
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function GrammarModule() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = exercises.find(e => e.id === activeId)

  if (active) {
    return (
      <div className="space-y-6">
        <button onClick={() => setActiveId(null)} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
          ← Назад к списку
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{active.title}</h2>
          <p className="text-sm text-slate-500 mt-1">{active.instructions}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          {active.content.type === 'fill_blank' && <FillBlankExerciseView ex={active} />}
          {active.content.type === 'transform' && <TransformExerciseView ex={active} />}
          {active.content.type === 'error_correction' && <ErrorCorrectionView ex={active} />}
        </div>
        {active.rubric && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="text-sm font-semibold text-slate-700 mb-3">Критерии оценивания</div>
            {active.rubric.map(r => (
              <div key={r.name} className="flex justify-between text-sm text-slate-600 py-1 border-b border-slate-100 last:border-0">
                <span>{r.name}</span>
                <span className="font-medium">{r.max_points} б.</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">📝 Грамматика</h2>
        <p className="text-slate-500 mt-1">Упражнения на времена, артикли, предлоги и трансформации</p>
      </div>
      <div className="grid gap-4">
        {exercises.map(ex => (
          <button
            key={ex.id}
            onClick={() => setActiveId(ex.id)}
            className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold text-slate-800 group-hover:text-blue-700">{ex.title}</div>
                <div className="text-sm text-slate-500 mt-1">{ex.instructions}</div>
              </div>
              <div className="shrink-0 text-sm text-slate-400">{ex.max_score} б.</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
