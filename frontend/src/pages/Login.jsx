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
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-md">
        <div className="bg-secondary p-10 rounded-lg">
          <h1 className="text-2xl font-bold text-alt text-center">Login Page</h1>
          
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="username" >Username</label>
              <input className="border border-gray-600 p-2 w-full rounded-lg text-bgdark"  placeholder='Blender' type="text" id="username" onChange={(e) => setUser(e.target.value)}  required/>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password">Password</label>
              <input className="border border-gray-600 p-2 w-full rounded-lg text-bgdark"  placeholder='ImGoingHardAtLogin' type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            <div className="mb-4">
              <button className="bg-bgdark hover:bg-bglight text-white font-bold p-3 w-full rounded-lg" onClick={handleLogin}>Login</button>
            </div>

          
          <p className="text-sm text-gray-600 text-center">Don't have an account? <a href="/login" className="text-blue-700 hover:text-blue-400">Create here</a>.</p>
        </div>
      </div>
    </div>
      

    </>
  )
}
