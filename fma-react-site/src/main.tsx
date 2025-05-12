import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../reset.css'
import '../style.css'
import './header.css';
import './character-ratings.css'
import './character-cards.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
