import { useState } from 'react'
import { EXERCISES } from '../../lib/exercises-data'
import type { SpeakingExercise } from '../../lib/types'
import SpeechRecorder from '../../components/SpeechRecorder'
import { evaluateSpeech, ScoreDisplay } from '../../components/ScoreEvaluator'
import type { EvaluationResult } from '../../components/ScoreEvaluator'

const exercises = EXERCISES.filter(e => e.module === 'dialogue')

const ROLES_MAP: Record<string, { a: string; b: string }> = {
  'dia-roundtable-1': {
    a: 'Группа 1 — Сравнительный анализ систем образования (Россия, Великобритания, США, Германия)',
    b: 'Группа 2 — Финансовая грамотность и профессиональное образование',
  },
}

export default function DialogueModule() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [role, setRole] = useState<'A' | 'B'>('A')
  const [transcript, setTranscript] = useState('')
  const [result, setResult] = useState<EvaluationResult | null>(null)

  const active = exercises.find(e => e.id === activeId)

  function evaluate() {
    if (!active) return
    const content = active.content as SpeakingExercise
    const r = evaluateSpeech(transcript, content.required_vocab, active.rubric ?? [])
    setResult(r)
  }

  if (active) {
    const content = active.content as SpeakingExercise
    const roles = ROLES_MAP[active.id]

    return (
      <div className="space-y-6">
        <button onClick={() => { setActiveId(null); setResult(null); setTranscript('') }}
          className="text-sm text-blue-600 hover:underline">← Назад</button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{active.title}</h2>
          <p className="text-sm text-slate-500 mt-1">{active.instructions}</p>
        </div>

        {/* Role picker */}
        {roles && (
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
            <div className="text-sm font-semibold text-rose-800 mb-3">Выберите роль / тему группы:</div>
            <div className="space-y-2">
              <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                role === 'A' ? 'border-rose-400 bg-white' : 'border-transparent hover:bg-rose-100'
              }`}>
                <input type="radio" checked={role === 'A'} onChange={() => setRole('A')} className="mt-0.5" />
                <span className="text-sm text-slate-700">{roles.a}</span>
              </label>
              <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                role === 'B' ? 'border-rose-400 bg-white' : 'border-transparent hover:bg-rose-100'
              }`}>
                <input type="radio" checked={role === 'B'} onChange={() => setRole('B')} className="mt-0.5" />
                <span className="text-sm text-slate-700">{roles.b}</span>
              </label>
            </div>
          </div>
        )}

        {/* Topic & structure */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div className="font-semibold text-blue-900">{content.topic}</div>
          <div className="mt-3 text-sm text-blue-700">Длительность: до {content.duration_min} мин</div>
        </div>

        {content.structure_hints && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Структура задания</div>
            {content.structure_hints.map((hint, i) => (
              <div key={i} className="text-sm text-slate-600 flex gap-2">
                <span className="text-rose-500 font-bold">•</span> {hint}
              </div>
            ))}
          </div>
        )}

        {/* Vocab */}
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Обязательная лексика
          </div>
          <div className="flex flex-wrap gap-2">
            {content.required_vocab.map(word => (
              <span key={word} className="text-xs bg-rose-100 text-rose-800 px-2.5 py-1 rounded-full border border-rose-200">
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Recorder */}
        <div>
          <div className="text-sm font-semibold text-slate-700 mb-3">Запись</div>
          <SpeechRecorder
            transcript={transcript}
            onTranscriptChange={setTranscript}
            durationMin={content.duration_min}
          />
        </div>

        {transcript.trim().length > 20 && !result && (
          <button onClick={evaluate}
            className="w-full py-3 bg-rose-700 text-white rounded-xl font-medium hover:bg-rose-800 transition-colors">
            Получить оценку
          </button>
        )}

        {result && (
          <div>
            <ScoreDisplay result={result} rubric={active.rubric ?? []} />
            <button
              onClick={() => { setResult(null); setTranscript('') }}
              className="mt-4 w-full py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm hover:bg-slate-50"
            >
              Попробовать снова
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">💬 Диалоги и круглые столы</h2>
        <p className="text-slate-500 mt-1">Групповые презентации и модерируемые дискуссии</p>
      </div>
      <div className="grid gap-4">
        {exercises.map(ex => {
          const content = ex.content as SpeakingExercise
          return (
            <button
              key={ex.id}
              onClick={() => setActiveId(ex.id)}
              className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-rose-300 hover:shadow-sm transition-all group"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <div className="font-semibold text-slate-800 group-hover:text-rose-700">{ex.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{content.topic}</div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
                      ⏱ до {content.duration_min} мин
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {content.required_vocab.length} терминов
                    </span>
                  </div>
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
