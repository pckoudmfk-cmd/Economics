export type Role = 'student' | 'teacher'

export interface UserProfile {
  id: string
  email: string
  full_name: string
  role: Role
  group_name?: string
  created_at: string
}

export interface Exercise {
  id: string
  module: 'grammar' | 'vocabulary' | 'speaking' | 'writing' | 'dialogue'
  title: string
  instructions: string
  content: ExerciseContent
  rubric?: RubricCriteria[]
  max_score: number
}

export interface FillBlankExercise {
  type: 'fill_blank'
  sentences: { text: string; answer: string; options?: string[] }[]
}

export interface TransformExercise {
  type: 'transform'
  sentences: { original: string; instruction: string; answer: string }[]
}

export interface ErrorCorrectionExercise {
  type: 'error_correction'
  sentences: { wrong: string; correct: string }[]
}

export interface VocabMatchExercise {
  type: 'vocab_match'
  words: { term: string; definition: string }[]
}

export interface SpeakingExercise {
  type: 'speaking'
  topic: string
  role?: string
  duration_min: number
  required_vocab: string[]
  required_tenses?: string[]
  structure_hints?: string[]
}

export interface WritingExercise {
  type: 'writing'
  prompt: string
  template?: string
  word_count_min: number
  word_count_max?: number
}

export type ExerciseContent =
  | FillBlankExercise
  | TransformExercise
  | ErrorCorrectionExercise
  | VocabMatchExercise
  | SpeakingExercise
  | WritingExercise

export interface RubricCriteria {
  name: string
  max_points: number
  description: string
}

export interface Attempt {
  id: string
  user_id: string
  exercise_id: string
  submitted_at: string
  score: number
  max_score: number
  answers: unknown
  transcript?: string
  feedback?: string
}

export interface StudentProgress {
  user_id: string
  full_name: string
  group_name: string
  modules: {
    grammar: ModuleStats
    vocabulary: ModuleStats
    speaking: ModuleStats
    writing: ModuleStats
    dialogue: ModuleStats
  }
}

export interface ModuleStats {
  completed: number
  total: number
  avg_score: number
}
