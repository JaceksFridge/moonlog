import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './userContext'


const Login = ({ setLogReg }) => {

  const server = process.env.REACT_APP_SERVER_URL

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { setUser } = useContext(UserContext)

  const onSubmit = async (e) => {
    if (username === '' || password === '') {
      setErrorMessage("Username and or the password")
      return
    }
    try {
      const response = await fetch(`${server}/user/login`, {
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
        
        // Save the token in localStorage
        localStorage.setItem('username', user.username)
        localStorage.setItem('userId', user.userId)
        localStorage.setItem('token', user.token)

        setLogReg(false)

      } else {
        setErrorMessage(user.error || 'Failed to Login')
      }

    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      // Save the token in local storage
      localStorage.setItem('token', token);
      // Set the user in context
      setUser({token: token});
      // Clear the URL query string
      window.history.replaceState(null, null, window.location.pathname);
      setLogReg(false)
    }
  },[setUser, setLogReg])


  const handleGoogleSignIn = () => {
    window.open(`${server}/auth/google/`);
  }



  return (
      <div className="login">
        <h2 className="logreg-title">Welcome back,</h2>
        <p className="logreg-subtitle">Log in to continue</p>
          <form action="" className="loginForm" onSubmit={(e) => {e.preventDefault(); onSubmit();}}>
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
                type="submit"
              >
                Login
              </button>
              <div className="or-line">
                <div className="line"></div>
                <div className="or">or</div>
                <div className="line"></div>
              </div>
              <button className="google-btn" onClick={handleGoogleSignIn}>
                <div className="google-logo"></div>
                <div>Sign in with Google</div>
              </button>
            </div>
  
          </form>
      </div>
  )
}

export default Login
