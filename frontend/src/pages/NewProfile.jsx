import React, { useState } from 'react'

export default function NewProfile() {
    const [message, setMessage] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log({
        username,
        password
        })
        const response = await loginUser({
        username,
        password
        });
        if (response.accessToken === username) {
        auth.login(username)
        navigate("/products")
        }else{
        alert(response.type)
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
                        <input className="border border-gray-600 p-2 w-full rounded-lg text-bgdark"  placeholder='Username' type="text" id="username" onChange={(e) => setUser(e.target.value)}  required/>
                        </div>

                        <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="new-password">Password</label>
                        <input className="border border-gray-600 p-2 w-full rounded-lg text-bgdark"  placeholder='Password' type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>

                        <div className="mb-4">
                        <button className="bg-bgdark hover:bg-bglight text-white font-bold p-3 w-full rounded-lg" onClick={handleLogin}>Create</button>
                        </div>
                        {message !== '' ? <h3>{message}</h3> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}