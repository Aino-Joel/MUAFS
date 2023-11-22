import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { HostelsContextProvider } from './context/HostelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HostelsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </HostelsContextProvider>
  </React.StrictMode>
);
