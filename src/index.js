import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { FilterContextProvider } from './contexts/FilterContext';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './stylesheets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();