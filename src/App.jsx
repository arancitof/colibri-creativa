import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Artists from './pages/Artists';



function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Artistas' element={<Artists />}/>
        <Route path='/Sobre-nosotros' element={<AboutUs />} />
        <Route path='/Contacto' />

      </Routes>

    </Router>

  );
};

export default App
