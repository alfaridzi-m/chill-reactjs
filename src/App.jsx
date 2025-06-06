import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Mainpage from './pages/mainpage.jsx';
import NoPage from "./pages/no-page.jsx";
import Daftarsaya from "./pages/daftar-saya.jsx";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/daftarsaya" element={<Daftarsaya/>} />
       <Route path="/chill-reactjs" element={<Mainpage/>} />
       <Route path="*" element={<NoPage/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;