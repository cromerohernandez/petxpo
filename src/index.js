import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { FilterContextProvider } from './contexts/FilterContext';

import Navbar from './components/UI/Navbar'
import App from './components/App';
import Footer from './components/UI/Footer'
import reportWebVitals from './reportWebVitals';

import './stylesheets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FilterContextProvider>
          <Navbar/>
          <App/>
          <Footer/>
        </FilterContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();