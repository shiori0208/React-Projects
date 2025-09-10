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

  // ... The spread operator can combine properties from multiple objects or update fields when making a new object.
  //... For arrays: It "spreads" array items into new arrays.

  const updateToDo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id)))
  }

  const deleteToDo = (id) => {
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed:
        !prevTodo.completed} : prevTodo
    )
   )
  }

  return (
    <ToDoProvider value={{todos, addToDo, updateToDo, deleteToDo, toggleComplete}}>

     <h1 className='text-3xl font-bold underline bg-amber-300'>OOF</h1>

    </ToDoProvider>
  )
}

export default App
