import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/auth'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import GrammarModule from './pages/modules/GrammarModule'
import VocabularyModule from './pages/modules/VocabularyModule'
import SpeakingModule from './pages/modules/SpeakingModule'
import WritingModule from './pages/modules/WritingModule'
import DialogueModule from './pages/modules/DialogueModule'

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-400 text-sm">Загрузка...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }

  if (user.role === 'teacher') {
    return (
      <Layout>
        <Routes>
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="*" element={<Navigate to="/teacher" replace />} />
        </Routes>
      </Layout>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/grammar" element={<GrammarModule />} />
        <Route path="/student/vocabulary" element={<VocabularyModule />} />
        <Route path="/student/speaking" element={<SpeakingModule />} />
        <Route path="/student/writing" element={<WritingModule />} />
        <Route path="/student/dialogue" element={<DialogueModule />} />
        <Route path="/" element={<Navigate to="/student" replace />} />
        <Route path="*" element={<Navigate to="/student" replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
