import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

function hidePreloader() {
  const preloader = document.getElementById('preloader')
  const root = document.getElementById('root')

  if (preloader) {
    preloader.classList.add('hidden')
    // Remove from DOM after transition ends so it doesn't block interactions
    preloader.addEventListener('transitionend', () => preloader.remove(), { once: true })
  }

  if (root) {
    root.classList.add('ready')
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Hide preloader after React has painted — 'requestAnimationFrame' ensures
// the first frame is rendered before we dismiss
requestAnimationFrame(() => {
  requestAnimationFrame(hidePreloader)
})