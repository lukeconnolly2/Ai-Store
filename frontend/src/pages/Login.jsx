import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')  
  const [password, setPassword] = useState('')  

  const auth = useAuth()
  const handleLogin = () => {
    auth.login(user)
    navigate("/products")
  }

  return (
    <>
    <div>Login Page</div>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={(e) => setUser(e.target.value)} required/>

    <label htmlFor="password">Password</label>
    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}
