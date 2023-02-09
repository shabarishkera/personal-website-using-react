import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Banner from "./components/Banner.js";
import Navbar from "./components/Navbar.js";
import Content from './components/Content.js';
import Footer from    './components/Footer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar/>
    <Banner/>
    <Content/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
