import type { RubricCriteria } from '../lib/types'

interface VocabResult {
  found: string[]
  missing: string[]
  score: number
}

interface TenseResult {
  detected: string[]
  score: number
}

interface StructureResult {
  hasIntro: boolean
  hasConclusion: boolean
  score: number
}

export interface EvaluationResult {
  vocab: VocabResult
  tenses: TenseResult
  structure: StructureResult
  wordCount: number
  totalScore: number
  maxScore: number
  feedback: string[]
}

export function evaluateSpeech(
  transcript: string,
  requiredVocab: string[],
  rubric: RubricCriteria[],
  requiredTenses?: string[]
): EvaluationResult {
  const lower = transcript.toLowerCase()
  const words = transcript.trim().split(/\s+/).filter(Boolean)

  // Vocabulary check
  const foundVocab = requiredVocab.filter(v => lower.includes(v.toLowerCase()))
  const missingVocab = requiredVocab.filter(v => !lower.includes(v.toLowerCase()))
  const vocabScore = Math.round((foundVocab.length / Math.max(requiredVocab.length, 1)) * 10)

  // Tense detection (simple heuristics)
  const tensePatterns: Record<string, RegExp[]> = {
    'Present Simple': [/\b(is|are|am|has|have|do|does)\b/, /\b\w+(s|es)\b/],
    'Past Simple': [/\b(was|were|had|did)\b/, /\b\w+(ed)\b/],
    'Future Simple': [/\bwill\b/, /\b(shall)\b/],
    'Present Perfect': [/\b(have|has)\s+\w+(ed|en)\b/],
    'Present Continuous': [/\b(is|are|am)\s+\w+(ing)\b/],
    'Past Continuous': [/\b(was|were)\s+\w+(ing)\b/],
  }

  const detectedTenses: string[] = []
  for (const [tense, patterns] of Object.entries(tensePatterns)) {
    if (patterns.some(p => p.test(lower))) {
      detectedTenses.push(tense)
    }
  }

  const requiredTensesList = requiredTenses ?? ['Present Simple', 'Past Simple', 'Future Simple']
  const foundRequiredTenses = requiredTensesList.filter(t => detectedTenses.includes(t))
  const tenseScore = Math.round((foundRequiredTenses.length / Math.max(requiredTensesList.length, 1)) * 10)

  // Structure check
  const introKeywords = /\b(today|topic|going to|discuss|talk about|introduce|welcome|good morning|good afternoon)\b/i
  const conclusionKeywords = /\b(conclusion|summary|summarize|in conclusion|to sum up|finally|overall|outlook|future)\b/i
  const hasIntro = introKeywords.test(transcript)
  const hasConclusion = conclusionKeywords.test(transcript)
  const structureScore = (hasIntro ? 10 : 0) + (hasConclusion ? 10 : 0)

  // Total
  const maxScore = rubric.reduce((s, r) => s + r.max_points, 0)
  const rawScore = vocabScore + tenseScore + structureScore
  const totalScore = Math.min(Math.round((rawScore / 40) * maxScore), maxScore)

  // Feedback
  const feedback: string[] = []
  if (words.length < 50) feedback.push('Речь слишком короткая. Постарайтесь говорить дольше.')
  if (foundVocab.length < 5) feedback.push(`Используйте больше обязательных слов. Нашлось: ${foundVocab.length}/${requiredVocab.length}.`)
  if (missingVocab.length > 0 && missingVocab.length <= 5) {
    feedback.push(`Не найдены слова: ${missingVocab.slice(0, 5).join(', ')}`)
  }
  if (!hasIntro) feedback.push('Добавьте вступление: представьтесь и обозначьте тему.')
  if (!hasConclusion) feedback.push('Добавьте заключение: подведите итог и дайте прогноз.')
  if (foundRequiredTenses.length < 2) {
    feedback.push(`Используйте больше времён. Обнаружено: ${detectedTenses.join(', ') || 'нет'}`)
  }
  if (feedback.length === 0) feedback.push('Отличная работа! Все ключевые критерии выполнены.')

  return {
    vocab: { found: foundVocab, missing: missingVocab, score: vocabScore },
    tenses: { detected: detectedTenses, score: tenseScore },
    structure: { hasIntro, hasConclusion, score: structureScore },
    wordCount: words.length,
    totalScore,
    maxScore,
    feedback,
  }
}

export function ScoreDisplay({ result, rubric }: { result: EvaluationResult; rubric: RubricCriteria[] }) {
  const pct = Math.round((result.totalScore / result.maxScore) * 100)
  const color = pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-amber-600' : 'text-red-600'
  const bgBar = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-amber-500' : 'bg-red-500'

  return (
    <div className="space-y-5 bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">Результат автопроверки</h3>
        <span className={`text-2xl font-bold ${color}`}>
          {result.totalScore}/{result.maxScore}
        </span>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-2">
        <div className={`h-2 rounded-full ${bgBar} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>

      {/* Rubric criteria */}
      <div className="space-y-3">
        {rubric.map(r => (
          <div key={r.name} className="text-sm">
            <div className="flex justify-between mb-0.5">
              <span className="font-medium text-slate-700">{r.name}</span>
              <span className="text-slate-500">макс. {r.max_points} б.</span>
            </div>
            <p className="text-xs text-slate-400">{r.description}</p>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="font-medium text-blue-800 mb-1">Лексика</div>
          <div className="text-blue-700">{result.vocab.found.length}/{result.vocab.found.length + result.vocab.missing.length} слов</div>
          {result.vocab.found.length > 0 && (
            <div className="text-blue-600 mt-1">{result.vocab.found.slice(0, 4).join(', ')}{result.vocab.found.length > 4 ? '…' : ''}</div>
          )}
        </div>
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="font-medium text-purple-800 mb-1">Грамматические времена</div>
          <div className="text-purple-700">{result.tenses.detected.join(', ') || '—'}</div>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <div className="font-medium text-green-800 mb-1">Структура</div>
          <div className="text-green-700">
            {result.structure.hasIntro ? '✓' : '✗'} Вступление<br />
            {result.structure.hasConclusion ? '✓' : '✗'} Заключение
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <div className="font-medium text-slate-800 mb-1">Объём речи</div>
          <div className="text-slate-600">{result.wordCount} слов</div>
        </div>
      </div>

      {/* Feedback */}
      <div className="space-y-2">
        <div className="text-sm font-medium text-slate-700">Комментарии:</div>
        {result.feedback.map((f, i) => (
          <div key={i} className="flex gap-2 text-sm text-slate-600">
            <span className="mt-0.5 shrink-0">{f.startsWith('Отличн') ? '✅' : '💡'}</span>
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
