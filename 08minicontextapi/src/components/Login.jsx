import React from 'react'
import { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        
    }

  return (
    <div>
        <h2> Login </h2>
        <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)}
        />
    </div>
  )
}

export default Login