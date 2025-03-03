import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {SidebarToggleProvider} from './context/SidebarToggleProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarToggleProvider>
      <App />

  </SidebarToggleProvider>
 
)
