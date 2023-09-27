

import React from 'react'

const LoginDesktop = ({
  onSubmit, username, setUsername, password, setPassword, errorMessage, handleGoogleSignIn
}) => {
  return (
    <div className="login-desktop">
      <h2 className="logreg-title">Start your Journey!</h2>
      <p className="logreg-subtitle">Create an account to continue</p>
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
          <div className="logreg-toggle">
            <p>Don't have an account?<span>Register</span></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginDesktop
