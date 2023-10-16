import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { setupNavbar } from './components/Navbar';
import './index.css';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = (username, password) => {
    console.log('Username:', username);
    console.log('Password:', password);
    setIsLoggedin(true);
  };

  useEffect(() => {
    setupNavbar();
  }, []);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setIsLoggedin} />} />
        </Routes>
        {isLoggedin ? <SomeLoggedInComponent /> : <SomeLoggedOutComponent />}
      </React.StrictMode>
    </BrowserRouter>
  );
};