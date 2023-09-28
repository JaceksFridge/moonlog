

import React from 'react'

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
            className="submit-btn"
            type="submit"
          >
            Register
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
            <p>Already have an account?</p>
            <a 
                onClick={(e) => {e.preventDefault(); toggleSwitch()}}
                href=""
            >Login
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginDesktop
