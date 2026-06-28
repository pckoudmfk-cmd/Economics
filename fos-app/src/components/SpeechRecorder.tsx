import { useState, useRef, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyWindow = Window & typeof globalThis & Record<string, any>

interface Props {
  onTranscriptChange: (text: string) => void
  transcript: string
  durationMin?: number
}

export default function SpeechRecorder({ onTranscriptChange, transcript, durationMin = 1 }: Props) {
  const [recording, setRecording] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [supported, setSupported] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const w = window as AnyWindow
    if (!w.SpeechRecognition && !w.webkitSpeechRecognition) {
      setSupported(false)
    }
  }, [])

  function getSpeechRecognition() {
    const w = window as AnyWindow
    return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
  }

  function startRecording() {
    const SR = getSpeechRecognition()
    if (!SR) return

    const recognition = new SR()
    recognition.lang = 'en-US'
    recognition.continuous = true
    recognition.interimResults = true

    let finalText = transcript

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let interim = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalText += result[0].transcript + ' '
        } else {
          interim = result[0].transcript
        }
      }
      onTranscriptChange(finalText + interim)
    }

    recognition.onerror = () => { stopRecording() }

    recognitionRef.current = recognition
    recognition.start()
    setRecording(true)
    setElapsed(0)

    timerRef.current = setInterval(() => {
      setElapsed(s => s + 1)
    }, 1000)
  }

  function stopRecording() {
    recognitionRef.current?.stop()
    if (timerRef.current) clearInterval(timerRef.current)
    setRecording(false)
  }

  function clearTranscript() {
    onTranscriptChange('')
    setElapsed(0)
  }

  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60
  const targetSeconds = durationMin * 60
  const progress = Math.min((elapsed / targetSeconds) * 100, 100)

  if (!supported) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
        ⚠️ Ваш браузер не поддерживает распознавание речи. Используйте Google Chrome или Microsoft Edge.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-slate-600">
        <span className={`font-mono text-lg font-bold ${recording ? 'text-red-600' : 'text-slate-400'}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <span className="text-xs text-slate-400">Цель: {durationMin} мин</span>
      </div>

      {recording && (
        <div className="w-full bg-slate-200 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex gap-3">
        {!recording ? (
          <button
            onClick={startRecording}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            <span>🎙️</span> Начать запись
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm animate-pulse"
          >
            <span>⏹</span> Остановить
          </button>
        )}

        {transcript && !recording && (
          <button
            onClick={clearTranscript}
            className="px-4 py-2.5 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-100 text-sm"
          >
            Очистить
          </button>
        )}
      </div>

      <div className="relative">
        <textarea
          className="w-full min-h-[120px] p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Текст вашей речи появится здесь автоматически..."
          value={transcript}
          onChange={(e) => onTranscriptChange(e.target.value)}
          readOnly={recording}
        />
        {recording && (
          <div className="absolute top-2 right-2 flex items-center gap-1 text-xs text-red-600 font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse inline-block" />
            REC
          </div>
        )}
      </div>

      <p className="text-xs text-slate-400">
        Говорите по-английски. Текст распознаётся автоматически. Вы также можете отредактировать транскрипцию вручную.
      </p>
    </div>
  )
}
