import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <About />
    <Projects />

  </StrictMode>,
)
