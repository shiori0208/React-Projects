import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  //this is a boilerplate code that makes sure every layer of the application has the data 
  return (
    <UserContextProvider>
    <h1>React Video for Context API</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
