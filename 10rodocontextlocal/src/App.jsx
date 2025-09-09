import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './contexts/ToDoContexts'

function App() {
  const [todos, setTodos] = useState([])
  const addToDo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev]) 
  }



  return (
    <ToDoProvider value={{todos, addToDo, updateToDo, deleteToDo, toggleComplete}}>

     <h1 className='text-3xl font-bold underline bg-amber-300'>OOF</h1>

    </ToDoProvider>
  )
}

export default App
