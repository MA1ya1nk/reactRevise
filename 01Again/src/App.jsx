import { useState } from 'react'
import './Index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
