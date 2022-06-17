import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './lang/i18n';  //Traemos fichero de iniciar traducciones en el index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

