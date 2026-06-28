import { useState } from 'react'
import { EXERCISES } from '../../lib/exercises-data'
import type { Exercise, SpeakingExercise } from '../../lib/types'
import SpeechRecorder from '../../components/SpeechRecorder'
import { evaluateSpeech, ScoreDisplay } from '../../components/ScoreEvaluator'
import type { EvaluationResult } from '../../components/ScoreEvaluator'
import { useAuth } from '../../lib/auth'
import { saveAttempt } from '../../lib/attempts'

const exercises = EXERCISES.filter(e => e.module === 'speaking')

function SpeakingExerciseView({ ex }: { ex: Exercise }) {
  const { user } = useAuth()
  const content = ex.content as SpeakingExercise
  const [transcript, setTranscript] = useState('')
  const [result, setResult] = useState<EvaluationResult | null>(null)
  const [showHints, setShowHints] = useState(false)

  async function evaluate() {
    const r = evaluateSpeech(transcript, content.required_vocab, ex.rubric ?? [], content.required_tenses)
    setResult(r)
    if (user) {
      await saveAttempt({
        userId: user.id,
        exerciseId: ex.id,
        module: ex.module,
        score: r.totalScore,
        maxScore: ex.max_score,
        transcript,
        feedback: r.feedback.join('; '),
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Topic */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">Тема</div>
        <div className="text-blue-900 font-semibold text-lg">{content.topic}</div>
        {content.role && (
          <div className="mt-2 text-sm text-blue-700">
            <span className="font-medium">Роль:</span> {content.role}
          </div>
        )}
        <div className="mt-2 text-sm text-blue-600">
          Длительность: {content.duration_min} мин
        </div>
      </div>

      {/* Vocabulary hints */}
      <div>
        <button
          onClick={() => setShowHints(v => !v)}
          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
        >
          {showHints ? '▼' : '▶'} Обязательная лексика ({content.required_vocab.length} слов)
        </button>
        {showHints && (
          <div className="mt-3 flex flex-wrap gap-2">
            {content.required_vocab.map(word => (
              <span key={word} className="text-xs bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full border border-blue-200">
                {word}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Structure hints */}
      {content.structure_hints && content.structure_hints.length > 0 && (
        <div className="bg-slate-50 rounded-xl p-4 space-y-1.5">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Структура</div>
          {content.structure_hints.map((hint, i) => (
            <div key={i} className="text-sm text-slate-600 flex gap-2">
              <span className="text-blue-500 font-bold">{i + 1}.</span> {hint}
            </div>
          ))}
        </div>
      )}

      {/* Recorder */}
      <div>
        <div className="text-sm font-semibold text-slate-700 mb-3">Запись речи</div>
        <SpeechRecorder
          transcript={transcript}
          onTranscriptChange={setTranscript}
          durationMin={content.duration_min}
        />
      </div>

      {/* Evaluate button */}
      {transcript.trim().length > 20 && !result && (
        <button
          onClick={evaluate}
          className="w-full py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition-colors"
        >
          Получить оценку ИИ
        </button>
      )}

      {/* Score display */}
      {result && (
        <div>
          <ScoreDisplay result={result} rubric={ex.rubric ?? []} />
          <button
            onClick={() => { setResult(null); setTranscript('') }}
            className="mt-4 w-full py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm hover:bg-slate-50"
          >
            Попробовать снова
          </button>
        </div>
      )}

      {/* Rubric */}
      {ex.rubric && !result && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <div className="text-sm font-semibold text-slate-700 mb-3">Критерии оценивания</div>
          {ex.rubric.map(r => (
            <div key={r.name} className="py-1.5 border-b border-slate-100 last:border-0">
              <div className="flex justify-between text-sm">
                <span className="text-slate-700">{r.name}</span>
                <span className="text-slate-500 font-medium">{r.max_points} б.</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{r.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SpeakingModule() {
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
        <SpeakingExerciseView ex={active} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Говорение</h2>
        <p className="text-slate-500 mt-1">
          Презентации и диалоги. Речь распознаётся и оценивается автоматически.
        </p>
        <div className="mt-2 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 inline-block">
          Требуется Google Chrome или Microsoft Edge
        </div>
      </div>
      <div className="grid gap-4">
        {exercises.map(ex => {
          const content = ex.content as SpeakingExercise
          return (
            <button
              key={ex.id}
              onClick={() => setActiveId(ex.id)}
              className="text-left bg-white border border-slate-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-sm transition-all group"
            >
              <div className="flex justify-between gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-slate-800 group-hover:text-purple-700">{ex.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{content.topic}</div>
                  <div className="flex gap-3 mt-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                      {content.duration_min} мин
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
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
