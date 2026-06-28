import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import StudentDashboard from './pages/StudentDashboard'
import GrammarModule from './pages/modules/GrammarModule'
import VocabularyModule from './pages/modules/VocabularyModule'
import SpeakingModule from './pages/modules/SpeakingModule'
import WritingModule from './pages/modules/WritingModule'
import DialogueModule from './pages/modules/DialogueModule'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/student" replace />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/grammar" element={<GrammarModule />} />
          <Route path="/student/vocabulary" element={<VocabularyModule />} />
          <Route path="/student/speaking" element={<SpeakingModule />} />
          <Route path="/student/writing" element={<WritingModule />} />
          <Route path="/student/dialogue" element={<DialogueModule />} />
          <Route path="*" element={<Navigate to="/student" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
