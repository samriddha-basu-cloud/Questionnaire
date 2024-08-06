import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import PanelPage from './pages/PanelPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="p-4 bg-gray-800 text-white flex justify-around">
          <Link to="/admin">Admin</Link>
          <Link to="/user">User</Link>
          <Link to="/panel">Panel</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/panel" element={<PanelPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={
            <div className="p-4">
              <h1 className="text-2xl font-bold">Welcome to the Question-Answer Site</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
