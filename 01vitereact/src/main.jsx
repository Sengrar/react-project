// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <h3>hello</h3>
    <Nav />
  </>

)
