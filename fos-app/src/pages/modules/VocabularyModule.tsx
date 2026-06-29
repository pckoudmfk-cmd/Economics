import { useState } from 'react'
import { EXERCISES } from '../../lib/exercises-data'
import type { Exercise, FillBlankExercise, VocabMatchExercise, ReadingExercise } from '../../lib/types'

const exercises = EXERCISES.filter(e => e.module === 'vocabulary')

function VocabMatchView({ ex }: { ex: Exercise }) {
  const content = ex.content as VocabMatchExercise
  const [selected, setSelected] = useState<{ term: string; def: string } | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const shuffledDefs = [...content.words.map(w => w.definition)].sort(() => Math.random() - 0.5)
  const [defs] = useState(shuffledDefs)

  function selectTerm(term: string) {
    if (checked) return
    if (selected?.term === term) { setSelected(null); return }
    if (selected?.def) {
      setMatches(m => ({ ...m, [term]: selected.def }))
      setSelected(null)
    } else {
      setSelected({ term, def: '' })
    }
  }

  function selectDef(def: string) {
    if (checked) return
    if (selected?.def === def) { setSelected(null); return }
    if (selected?.term) {
      setMatches(m => ({ ...m, [selected.term]: def }))
      setSelected(null)
    } else {
      setSelected({ term: '', def })
    }
  }

  function isTermSelected(term: string) {
    return selected?.term === term
  }
  function isDefSelected(def: string) {
    return selected?.def === def || Object.values(matches).includes(def) === false && selected?.def === def
  }

  const score = content.words.filter(w => matches[w.term] === w.definition).length

  async function check() {
    setChecked(true)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">Нажмите термин, затем определение чтобы соединить их.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Термины</div>
          {content.words.map(w => {
            const matched = w.term in matches
            const correct = checked && matches[w.term] === w.definition
            const wrong = checked && matched && matches[w.term] !== w.definition
            return (
              <button
                key={w.term}
                onClick={() => selectTerm(w.term)}
                className={`w-full text-left text-sm px-3 py-2.5 rounded-lg border transition-all ${
                  checked
                    ? correct ? 'border-green-400 bg-green-50 text-green-800'
                    : wrong ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-slate-200 text-slate-600'
                  : isTermSelected(w.term)
                    ? 'border-blue-500 bg-blue-50 text-blue-800'
                    : matched
                    ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 hover:border-blue-300 text-slate-700'
                }`}
              >
                {w.term}
              </button>
            )
          })}
        </div>
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Определения</div>
          {defs.map(def => {
            const usedByTerm = Object.entries(matches).find(([, d]) => d === def)?.[0]
            const isUsed = !!usedByTerm
            const correct = checked && usedByTerm && content.words.find(w => w.term === usedByTerm)?.definition === def
            const wrong = checked && isUsed && !correct
            return (
              <button
                key={def}
                onClick={() => selectDef(def)}
                className={`w-full text-left text-xs px-3 py-2.5 rounded-lg border transition-all ${
                  checked
                    ? correct ? 'border-green-400 bg-green-50 text-green-700'
                    : wrong ? 'border-red-400 bg-red-50 text-red-700'
                    : 'border-slate-200 text-slate-500'
                  : isDefSelected(def) && selected?.def === def
                    ? 'border-blue-500 bg-blue-50'
                    : isUsed
                    ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 hover:border-blue-300 text-slate-600'
                }`}
              >
                {def}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        {!checked ? (
          <button
            onClick={check}
            disabled={Object.keys(matches).length < content.words.length}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            Проверить ({Object.keys(matches).length}/{content.words.length} соединено)
          </button>
        ) : (
          <>
            <div className={`text-sm font-semibold ${score === content.words.length ? 'text-green-600' : 'text-amber-600'}`}>
              {score} / {content.words.length} верно
            </div>
            <button
              onClick={() => { setMatches({}); setChecked(false); setSelected(null) }}
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

function FillBlankVocabView({ ex }: { ex: Exercise }) {
  const content = ex.content as FillBlankExercise
  const [answers, setAnswers] = useState<string[]>(Array(content.sentences.length).fill(''))
  const [checked, setChecked] = useState(false)

  const score = answers.filter((a, i) => a === content.sentences[i].answer).length

  async function check() {
    setChecked(true)
  }

  return (
    <div className="space-y-5">
      {content.sentences.map((s, i) => {
        const correct = answers[i] === s.answer
        const parts = s.text.split('___')
        return (
          <div key={i} className="space-y-1.5">
            <div className="text-sm text-slate-700 flex flex-wrap items-center gap-1">
              {parts.map((part, pi) => (
                <span key={pi}>
                  {part}
                  {pi < parts.length - 1 && (
                    <select
                      disabled={checked}
                      value={answers[i]}
                      onChange={e => { const n = [...answers]; n[i] = e.target.value; setAnswers(n) }}
                      className={`mx-1 border rounded px-2 py-1 text-sm ${
                        checked ? (correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-slate-300'
                      }`}
                    >
                      <option value="">— выберите —</option>
                      {s.options?.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
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
          <button onClick={check} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
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

function ReadingView({ ex }: { ex: Exercise }) {
  const content = ex.content as ReadingExercise
  const [answers, setAnswers] = useState<string[]>(Array(content.questions.length).fill(''))
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-5">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Текст для чтения</div>
        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{content.text}</p>
      </div>
      <div className="space-y-4">
        <div className="text-sm font-semibold text-slate-700">Ответьте на вопросы:</div>
        {content.questions.map((q, i) => (
          <div key={i} className="space-y-1.5">
            <div className="text-sm text-slate-700">{i + 1}. {q.question}</div>
            <textarea
              disabled={checked}
              value={answers[i]}
              onChange={e => { const n = [...answers]; n[i] = e.target.value; setAnswers(n) }}
              rows={2}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y disabled:bg-slate-50"
              placeholder="Введите ответ..."
            />
            {checked && (
              <div className="text-xs bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <span className="font-semibold text-blue-700">Образец ответа:</span>{' '}
                <span className="text-blue-700">{q.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 pt-2">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={answers.some(a => !a.trim())}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            Показать образцы ответов
          </button>
        ) : (
          <button
            onClick={() => { setAnswers(Array(content.questions.length).fill('')); setChecked(false) }}
            className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50"
          >
            Сбросить
          </button>
        )}
      </div>
    </div>
  )
}

export default function VocabularyModule() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = exercises.find(e => e.id === activeId)

  if (active) {
    return (
      <div className="space-y-6">
        <button onClick={() => setActiveId(null)} className="text-sm text-blue-600 hover:underline">← Назад</button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{active.title}</h2>
          <p className="text-sm text-slate-500 mt-1">{active.instructions}</p>
        </div>
        {active.theory && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Теория / Фон</div>
            <p className="text-sm text-blue-900 leading-relaxed whitespace-pre-wrap">{active.theory}</p>
          </div>
        )}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          {active.content.type === 'vocab_match' && <VocabMatchView ex={active} />}
          {active.content.type === 'fill_blank' && <FillBlankVocabView ex={active} />}
          {active.content.type === 'reading' && <ReadingView ex={active} />}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Лексика</h2>
        <p className="text-slate-500 mt-1">Банковская терминология и деловые выражения</p>
      </div>
      <div className="grid gap-4">
        {exercises.map(ex => (
          <button
            key={ex.id}
            onClick={() => setActiveId(ex.id)}
            className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-green-300 hover:shadow-sm transition-all group"
          >
            <div className="flex justify-between gap-4">
              <div>
                <div className="font-semibold text-slate-800 group-hover:text-green-700">{ex.title}</div>
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
