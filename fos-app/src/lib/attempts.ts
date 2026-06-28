import { supabase } from './supabase'

export interface SaveAttemptParams {
  userId: string
  exerciseId: string
  module: string
  score: number
  maxScore: number
  answers?: unknown
  transcript?: string
  feedback?: string
}

export async function saveAttempt(params: SaveAttemptParams) {
  const { error } = await supabase.from('attempts').insert({
    user_id: params.userId,
    exercise_id: params.exerciseId,
    module: params.module,
    score: params.score,
    max_score: params.maxScore,
    answers: params.answers ?? null,
    transcript: params.transcript ?? null,
    feedback: params.feedback ?? null,
  })
  return error
}

export async function fetchStudentsProgress() {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      id,
      full_name,
      group_name,
      attempts (
        exercise_id,
        module,
        score,
        max_score,
        submitted_at
      )
    `)
    .eq('role', 'student')
    .order('full_name')

  return { data, error }
}

export async function fetchStudentAttempts(userId: string) {
  const { data, error } = await supabase
    .from('attempts')
    .select('*')
    .eq('user_id', userId)
    .order('submitted_at', { ascending: false })

  return { data, error }
}
