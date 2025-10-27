import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Components/header.css'
import './Components/Button.css'
import './Components/Hero.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
