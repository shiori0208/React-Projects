import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

  })

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-violet-300 text-black'>
      <h2 className='text-3xl font-bold mb-2 text-center'>
        Password Genenator
      </h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-amber-50' placeholder='Password' readOnly />
        <button className='outline-none bg-pink-800 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flrx text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>

        <label htmlFor="length"> Len: {length}</label>
         <input type="range" min={6} max={20} value={length} name="" id="" className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />

        <label htmlFor="number"> Numbers </label>
         <input type="checkbox" name="" id="" defaultChecked={numberAllowed} onChange={() => {
          setNumberAllowed((prev) => !prev) }}/>

          <label htmlFor="charInput"> Characters </label>
         <input type="checkbox" name="" id="" defaultChecked={charAllowed} onChange={() => {
          setCharAllowed((prev) => !prev) }}/>

      </div>
      </div>
    </div>
  )
}

export default App
