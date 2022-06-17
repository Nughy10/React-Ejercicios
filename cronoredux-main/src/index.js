import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/reducerRedux'; //store con reducer en un archivo --> Crono2
import newStore from './redux/store';     //store con reducer en varios archivos --> Crono3
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={newStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
