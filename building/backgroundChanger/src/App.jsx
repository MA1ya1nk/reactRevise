import { useState, useRef} from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState('bg-red-500')
  const ref=useRef()

  return (
    <>
    <div>
    <div className='flex justify-center item-center'>
      <div ref={ref} className={`h-20 w-20 ${color} mb-4`}>BOX</div>
    </div>
    <div>
      <span className='h-4 w-4 bg-black text-white cursor-pointer' onClick={() =>{setColor('bg-black')} }>black</span>
      <span className='h-4 w-4 bg-blue-500' onClick={() =>{setColor('bg-blue-500')} }>blue</span>
      <span className='h-4 w-4 bg-green-500' onClick={() =>{setColor('bg-green-500')} }>green</span>
    </div>
     </div>
      </>
  )
}

export default App
