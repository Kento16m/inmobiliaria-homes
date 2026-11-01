import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import PropertiesProvider from '@/components/properties/PropertiesProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PropertiesProvider>
        <App />
      </PropertiesProvider>
    </BrowserRouter>
  </StrictMode>,
)
