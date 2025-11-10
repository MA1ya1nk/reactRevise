import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { About } from './About.jsx'
import User from './User.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateRouterFromElements, Route } from 'react-router-dom'


const router=createBrowserRouter(
  CreateRouterFromElements(
    <Route path='/' element={<App/>}>
      <Route path='about' element={<About/>}/>
      <Route path='user/:userId' element={<User/>}/>
    </Route>
  )  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
