import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './WebHelloReact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      Web Component resistrado: <my-web-component></my-web-component>
    </div>
  </StrictMode>,
)
