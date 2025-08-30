import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15) 
  
  //first val variable, second val function 
  //let counter = 15 

  const addValue = () => {
    setCounter((prevCount) => prevCount + 1)
  }; 

  const minusValue = () => {
   setCounter((prevCount) => prevCount - 1)
  }; 

  //called variable injection

  return (
  <>
  <h1>React learnin with Chi</h1> 
  <h2>Counter value: {counter} </h2>
  <button onClick={addValue}>+</button>
  <button onClick={minusValue}>-</button>
  <p>Footer: </p>
    </>
  )
}

export default App
