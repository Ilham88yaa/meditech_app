

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
