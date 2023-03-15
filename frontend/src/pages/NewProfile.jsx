import React, { useState } from 'react'
import { signupUser } from '../helpers/signupUser'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NewProfile() {
    const navigate = useNavigate()
    const [username, setUser] = useState('')  
    const [password, setPassword] = useState('')  

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log({
        username,
        password
        })
        const response = await signupUser({
        username,
        password
        });
        if (response.type === 'Saved'){
            navigate("/login")
        } else{
            alert("Something went wrong!")
        }
    }

    return(
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className="w-full max-w-md">
                    <div className="bg-secondary p-10 rounded-lg">
                    <h1 className="text-2xl font-bold text-alt text-center">Create New User</h1>
                    
                        <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="new-username" >Username</label>
                        <input className="border border-gray-600 p-2 w-full rounded-lg text-bgdark"  placeholder='Username' type="text" id="new-username" onChange={(e) => setUser(e.target.value)}  required/>
                        </div>

                        <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="new-password">Password</label>
                        <input className="border border-gray-600 p-2 w-full rounded-lg text-bgdark"  placeholder='Password' type="password" id="new-password" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>

                        <div className="mb-4">
                        <button className="bg-bgdark hover:bg-bglight text-white font-bold p-3 w-full rounded-lg" onClick={handleLogin}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}