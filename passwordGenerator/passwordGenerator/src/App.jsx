import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [Pass, setPass] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(true)
  const [size, setSize] = useState(12)
  
  useEffect(() => {
    const password = () => {
      let temp = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
      let numbers = "1234567890"
      const specialChars = "@#$%^&*"
      if(numberAllowed) temp += numbers
      if(specialCharAllowed) temp += specialChars;
      const len = temp.length
      let str = ""
      
      for(let i=0;i<size;i++){
          const randomInd = Math.floor(Math.random()*len);
          str += temp[randomInd]
      }
      setPass(str)
    }
    password()
  }, [numberAllowed, specialCharAllowed, size])
  
  return (
    <>
      <div>
        <input className='h-10 w-100 border-2 border-blue-500' value={Pass} type="text" />
        <span>copy</span>
        <input type="radio" onClick={(e) => {
          setSize(size+10)         
        }} />
        <div>
          <span className='p-3'>
          <label htmlFor="special">Special character</label>
          <input type="radio" id='special' onClick={(e) => setSpecialCharAllowed(!specialCharAllowed)}/>   
          </span>   
          <span>
          <label htmlFor="num">Number</label>
          <input type="radio" id='num' onClick={(e) => setNumberAllowed(!numberAllowed)}/>
          </span>    
        </div>
      </div>
    </>
  )
}

export default App
