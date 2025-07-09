import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import CVJobAnalyzer from './components/pages/CVJobAnalyzer';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv-job-analyzer" element={<CVJobAnalyzer />} />
        </Routes>
    </Router>
  );
}

export default App;