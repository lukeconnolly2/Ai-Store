import React from 'react'

export default function Login() {
  return (
    <>
    <div>Login Page</div>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" required/>

    <label htmlFor="password">Password</label>
    <input type="password" id="password" />
    </>
  )
}
