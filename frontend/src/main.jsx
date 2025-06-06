import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Success from './Pages/Success.jsx'
import Failed from './Pages/Failed.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/login' element={<App/>}></Route>
    <Route path='/success' element={<Success />}></Route>
    <Route path='/fail' element={<Failed/>}></Route>
  </Routes>
  </BrowserRouter>
)
