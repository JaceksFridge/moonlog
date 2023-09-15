import React, { useState, useContext } from 'react'
import { UserContext } from './userContext'

const Register = ({ setLogReg }) => {

  const server = process.env.REACT_APP_SERVER_URL
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { setUser } = useContext(UserContext)

  const onSubmit = async (e) => {
    if (username === '' || password === '') {
      setErrorMessage("Please fill out all elements")
      return
    }
    try {
      const response = await fetch(`${server}/user/register`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })

      })

      const user = await response.json()
      if (response.ok) {
        console.log("user", user)
       
        setUser({token: user.token, username: user.username})

        localStorage.setItem('username', user.username)
        localStorage.setItem('userId', user.userId)
        localStorage.setItem('token', user.token)

        setLogReg(false)

      } else if (user.error === 'Username already taken')
        setErrorMessage('Username is already taken')
      else {
        setErrorMessage(user.error || 'Failed to Register')
      }

    } catch (err) {
      setErrorMessage(err.message)
    }
  }


  return (
    <div className="register">
      <h2 className="logreg-title">Start your Journey!</h2>
      <p className="logreg-subtitle">Create an account to continue</p>
      <form action="" className="registerForm">
        <input 
          type="username" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="err-block">
          <div className="error-message">
            *{errorMessage}
          </div>
        </div>
        <div className="button-block">
          <button 
            className="submit-btn"
            type="button"
            onClick={onSubmit}
          >
            Register
          </button>
          <div className="or-line">
            <div className="line"></div>
            <div className="or">or</div>
            <div className="line"></div>
          </div>
          <button className="google-btn">
            <div className="google-logo"></div>
            <div>Sign in with Google</div>
          </button>
            </div>
      </form>
  </div>
  )
}

export default Register
