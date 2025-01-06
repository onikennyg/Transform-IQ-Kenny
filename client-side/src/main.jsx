import React from 'react'
import ReactDom  from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
