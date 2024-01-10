import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './320-767.css'
import './768-1440.css'
import './1440min.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

