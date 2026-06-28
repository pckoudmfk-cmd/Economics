import { useState } from 'react'
import { EXERCISES } from '../../lib/exercises-data'
import type { Exercise, WritingExercise } from '../../lib/types'

const exercises = EXERCISES.filter(e => e.module === 'writing')

const BUSINESS_PHRASES = [
  'I am writing to', 'I am writing with regard to', 'Please find attached',
  'I would like to', 'Could you please', 'I look forward to hearing from you',
  'Thank you for your', 'I am pleased to', 'We regret to inform you',
  'Further to our conversation', 'As per our agreement', 'Please do not hesitate to contact us',
  'I would be grateful if', 'I am available to meet', 'Best regards',
]

function WritingExerciseView({ ex }: { ex: Exercise }) {
  const content = ex.content as WritingExercise
  const [text, setText] = useState(content.template ?? '')
  const [showFeedback, setShowFeedback] = useState(false)

  const words = text.trim().split(/\s+/).filter(Boolean).length
  const meetsMin = words >= content.word_count_min
  const meetsMax = !content.word_count_max || words <= content.word_count_max

  const usedPhrases = BUSINESS_PHRASES.filter(p => text.toLowerCase().includes(p.toLowerCase()))

  const hasSalutation = /dear\s+\w/i.test(text)
  const hasSubject = /subject\s*:/i.test(text)
  const hasClosing = /(best regards|yours sincerely|kind regards|sincerely)/i.test(text)
  const hasPurpose = /(i am writing|i would like|please find)/i.test(text)

  const structureScore = [hasSalutation, hasSubject, hasClosing, hasPurpose].filter(Boolean).length

  return (
    <div className="space-y-5">
      {/* Prompt */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Задание</div>
        <div className="text-amber-900 text-sm">{content.prompt}</div>
        <div className="mt-2 text-xs text-amber-600">
          Объём: {content.word_count_min}
          {content.word_count_max ? `–${content.word_count_max}` : '+'} слов
        </div>
      </div>

      {/* Business phrases helper */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Полезные деловые фразы (нажмите, чтобы вставить)
        </div>
        <div className="flex flex-wrap gap-1.5">
          {BUSINESS_PHRASES.map(phrase => (
            <button
              key={phrase}
              onClick={() => setText(t => t + (t.endsWith(' ') || t === '' ? '' : ' ') + phrase + ' ')}
              className="text-xs bg-slate-100 hover:bg-blue-100 hover:text-blue-800 text-slate-600 px-2.5 py-1 rounded-lg transition-colors"
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>

      {/* Text editor */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-700">Ваш текст</label>
          <span className={`text-xs font-mono px-2 py-0.5 rounded ${
            meetsMin && meetsMax ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
          }`}>
            {words} / {content.word_count_min}{content.word_count_max ? `–${content.word_count_max}` : '+'} слов
          </span>
        </div>
        <textarea
          value={text}
          onChange={e => { setText(e.target.value); setShowFeedback(false) }}
          rows={12}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
          placeholder="Начните писать здесь..."
          spellCheck={true}
        />
      </div>

      <button
        onClick={() => setShowFeedback(true)}
        disabled={words < 20}
        className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white rounded-xl font-medium text-sm transition-colors"
      >
        Проверить письмо
      </button>

      {showFeedback && (
        <div className="space-y-4">
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`rounded-xl p-4 text-center ${meetsMin && meetsMax ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className={`text-2xl font-bold ${meetsMin ? 'text-green-600' : 'text-red-600'}`}>{words}</div>
              <div className="text-xs text-slate-500 mt-0.5">Слов (нужно {content.word_count_min}+)</div>
            </div>
            <div className={`rounded-xl p-4 text-center ${structureScore >= 3 ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
              <div className={`text-2xl font-bold ${structureScore >= 3 ? 'text-green-600' : 'text-amber-600'}`}>{structureScore}/4</div>
              <div className="text-xs text-slate-500 mt-0.5">Структура</div>
            </div>
          </div>

          {/* Structure checklist */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="text-sm font-semibold text-slate-700">Структура письма:</div>
            {[
              { label: 'Тема письма (Subject:)', ok: hasSubject },
              { label: 'Обращение (Dear Mr./Ms.)', ok: hasSalutation },
              { label: 'Цель письма (I am writing to...)', ok: hasPurpose },
              { label: 'Подпись (Best regards / Sincerely)', ok: hasClosing },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <span className={item.ok ? 'text-green-500' : 'text-slate-300'}>
                  {item.ok ? '✓' : '○'}
                </span>
                <span className={item.ok ? 'text-slate-700' : 'text-slate-400'}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Phrases used */}
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="text-sm font-semibold text-slate-700 mb-2">
              Деловые фразы: {usedPhrases.length} использовано
            </div>
            {usedPhrases.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {usedPhrases.map(p => (
                  <span key={p} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">✓ {p}</span>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-400">Используйте деловые фразы из списка выше</div>
            )}
          </div>

          {/* Rubric */}
          {ex.rubric && (
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-slate-700 mb-2">Критерии оценивания:</div>
              {ex.rubric.map(r => (
                <div key={r.name} className="py-1.5 border-b border-slate-100 last:border-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-700">{r.name}</span>
                    <span className="text-slate-500">{r.max_points} б.</span>
                  </div>
                  <div className="text-xs text-slate-400">{r.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function WritingModule() {
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
        <WritingExerciseView ex={active} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">✍️ Письмо</h2>
        <p className="text-slate-500 mt-1">Деловые письма, эссе и другие письменные задания</p>
      </div>
      <div className="grid gap-4">
        {exercises.map(ex => {
          const content = ex.content as WritingExercise
          return (
            <button
              key={ex.id}
              onClick={() => setActiveId(ex.id)}
              className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-300 hover:shadow-sm transition-all group"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-800 group-hover:text-amber-700">{ex.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{ex.instructions}</div>
                  <div className="text-xs text-slate-400 mt-1">{content.word_count_min}+ слов</div>
                </div>
                <div className="shrink-0 text-sm text-slate-400">{ex.max_score} б.</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
