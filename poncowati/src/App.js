import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import PakMonti from './page/PakMonti';
import Transad from './page/Transad';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pakmonti" element={<PakMonti />} />
          <Route path="/makanan" element={<Transad />} />
          {/* Tambahkan route lain di sini jika diperlukan */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;