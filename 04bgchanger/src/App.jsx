import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor ] = useState('black'); 

  //function changeColor(color) {
  // setColor(color)
  //}

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300 px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500 text-black'>Summer</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-800 text-white'>Monsoon</button>
          <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-amber-600 text-black'>Autumn</button>
          <button onClick={() => setColor('aqua')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-300 text-black'>Winter</button>
          <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-300 text-black'>Spring</button>
        </div>
      </div>
    </div>
  )
}

export default App
