import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { HomePage } from '@/pages/HomePage'
import { KeystaticAdminPage } from '@/pages/KeystaticAdminPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/keystatic/*" element={<KeystaticAdminPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
