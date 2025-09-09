import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './contexts/ToDoContexts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ToDoProvider>
     <h1 className='text-3xl font-bold underline bg-amber-300'>OOF</h1>
    </ToDoProvider>
  )
}

export default App
