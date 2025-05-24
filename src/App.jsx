import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;