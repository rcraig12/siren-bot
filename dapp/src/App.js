import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Forgotten from './pages/Forgotten';
import Home from './pages/Home';
import Project from './pages/Project';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/forgotten" element={<Forgotten />} /> 
      <Route path="/project" element={<Project />} /> 
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
