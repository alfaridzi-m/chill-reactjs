import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Mainpage from './pages/mainpage.jsx';
import NoPage from './pages/no-page.jsx';
import Daftarsaya from "./pages/daftar-saya.jsx";
import { useState } from 'react';
import ModalDetail from './component/modal-detail.jsx';

const App = () => {
  const [detailData, setDetailData] = useState(null);
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/daftarsaya" element={<Daftarsaya/>} />
       <Route path="/" element={<Mainpage setDetailData={setDetailData}/>} />
       <Route path="*" element={<NoPage/>} />
     </Routes>
     {detailData && (
        <ModalDetail detail={detailData} onClose={() => setDetailData(null)} />)}
    </BrowserRouter>
  )
}

export default App;