import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Home } from './pages/Home'
import './styles/style.scss'
import { Login } from './pages/Login'


// start point zero
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Login s/>
  </React.StrictMode>,
)
