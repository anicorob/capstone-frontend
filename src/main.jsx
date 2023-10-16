import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
