import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Sobre from './pages/Sobre.jsx'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/sobre', element: <Sobre />},
      {path: '/contato', element: <Contato />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
