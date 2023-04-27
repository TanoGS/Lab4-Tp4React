import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouters } from './AppRouters'
import NavBar from "./components/NavBar"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
       <NavBar/>
      <AppRouters />
    </BrowserRouter>
  </React.StrictMode>,
)
