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
          <button onClick={() => setColor('#F7DC9F')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-400 text-black'>Summer</button>
          <button onClick={() => setColor('#4C9DB0')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-700 text-white'>Monsoon</button>
          <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-amber-500 text-black'>Autumn</button>
          <button onClick={() => setColor('#BDD7DE')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-400 text-black'>Winter</button>
          <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-300 text-black'>Spring</button>
        </div>
      </div>
    </div>
  )
}

export default App
