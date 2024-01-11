

import React, { useEffect, useRef } from 'react'

const RegisterDesktop = ({
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
      <h2 className="logreg-title">Start your Journey!</h2>
      <p className="logreg-subtitle">Create an account to continue</p>
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
            ref={buttonRef}
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
          <button 
            className="google-btn" 
            type="button"
            onClick={handleGoogleSignIn}
          >
            <div className="google-logo"></div>
            <div>Coming Soon</div>
          </button>
          <div className="logreg-toggle">
          <p>Already have an account? </p>
            <p 
              className="toggle-switch"
              onClick={(e) => {e.preventDefault(); toggleSwitch();}}
            >Login
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterDesktop
