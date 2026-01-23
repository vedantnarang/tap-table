import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import AdminSignup from './pages/AdminSignup.tsx'
import AdminLogin from './pages/AdminLogin.tsx'
function App() {
  return (


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  )
}

export default App
