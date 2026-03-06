import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export const Login = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = ()=>{
        setUser({username , password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input 
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}
