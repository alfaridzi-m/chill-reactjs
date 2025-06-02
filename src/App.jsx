import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Mainpage from './pages/mainpage.jsx';
import NoPage from "./pages/no-page.jsx";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/" element={<Mainpage/>} />
       <Route path="*" element={<NoPage/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;