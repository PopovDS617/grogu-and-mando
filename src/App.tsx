import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Grogu from './pages/Grogu';
import Mando from './pages/Mando';
import Ship from './pages/Ship';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="grogu" element={<Grogu />} />
        <Route path="mando" element={<Mando />} />
        <Route path="ship" element={<Ship />} />
      </Routes>
    </div>
  );
}

export default App;
