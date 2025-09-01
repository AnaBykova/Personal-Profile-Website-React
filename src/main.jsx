import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper

import Header from './Header.jsx'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* 
      <App />
    */}
    <Home />
    <About />
    <Projects />
    <Contact />

  </StrictMode>,
)
