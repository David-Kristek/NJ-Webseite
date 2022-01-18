import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Questions from './pages/Questions';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fragen" element={<Questions />} />
        <Route path="/uber_uns" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
