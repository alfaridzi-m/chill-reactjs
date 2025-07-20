import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Mainpage from './pages/mainpage.jsx'
import NoPage from './pages/no-page.jsx'
import Daftarsaya from "./pages/daftar-saya.jsx"
import ModalDetail from './component/modal-detail.jsx'
import ProtectedRoute from './component/ProtectedRoute.jsx'
import Account from './pages/account.jsx'
import ProfileForm from './pages/tesPage.jsx'
import { useFilmDetailStore } from './store/film.js'
import ChillPlayer from './pages/chill-player.jsx'

const AppContent = () => {
  const { filmDetail: detailData, resetFilmDetail } = useFilmDetailStore()
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/daftarsaya" element={<ProtectedRoute><Daftarsaya/></ProtectedRoute>} />
        <Route path="/tespage" element={<ProtectedRoute><ProfileForm/></ProtectedRoute>} />
        <Route path="/account/:id" element={<ProtectedRoute><Account/></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><Mainpage/></ProtectedRoute>} />
        <Route path="/player/:id" element={<ProtectedRoute><ChillPlayer></ChillPlayer></ProtectedRoute>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
      {detailData &&  (
        <ModalDetail detail={detailData} onClose={() => resetFilmDetail()} />)}
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App