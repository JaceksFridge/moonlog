

import React, { useEffect, useRef } from 'react'

const LoginDesktop = ({
  onSubmit, 
  username, 
  setUsername, 
  password, 
  setPassword, 
  errorMessage, 
  setLogReg,
  handleGoogleSignIn,
  toggleSwitch
}) => {

  const buttonRef = useRef()
  useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.key === 'Enter' || event.keyCode === 13) {
          buttonRef.current.click();
      }
    }
    document.addEventListener('keydown', handleEnterKey)

    return () => {
      document.removeEventListener('keydown', handleEnterKey);
    }
  }, [])


  return (
    <div className="login-desktop">
      <h2 className="logreg-title">Welcome back,</h2>
      <p className="logreg-subtitle">Log in to continue</p>
      <form action="" className="loginForm" onSubmit={(e) => {e.preventDefault(); onSubmit(); setLogReg(false);}}>
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
          <div className="logreg-toggle">
            <p>Don't have an account? </p>
            <p 
              className="toggle-switch"
              onClick={(e) => {e.preventDefault(); toggleSwitch();}}
            >Register
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginDesktop
