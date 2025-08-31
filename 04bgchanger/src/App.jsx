import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div className='w-full h-screen duration-200 bg-amber-600'>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-300 px-3 py-2 rounded-3xl'>
          <button>Summer</button>
          <button>Monsoon</button>
          <button>Autumn</button>
          <button>Spring</button>
        </div>
      </div>
    </div>
  )
}

export default App
