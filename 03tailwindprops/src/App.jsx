import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App(props) {



  return (
    <>
      <h1 className='text-3xl bg-amber-700 p-3 rounded'> Billu </h1>
        <Card username="Shio" text="A housebilla of the Bengal type" />
        <Card /> 
    </>
  )
}

export default App
