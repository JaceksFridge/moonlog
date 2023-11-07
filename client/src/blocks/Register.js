

import React, { useState, useContext } from 'react'
import { UserContext } from './userContext'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import RegisterDesktop from '../Desktop/RegisterDesktop'

const Register = ({ setLogReg, logIn, setLogIn, toggleSwitch }) => {

  const server = process.env.REACT_APP_SERVER_URL
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { setUser } = useContext(UserContext)
  const jump = useNavigate()

  // Dummy Settings
  const settings = {
    health: {
        slider: {},
        checkers: { yoga: 100, run: 100, climb: 50 },
        counters: { workout: 50, stretch: 50, walk: 50, }
    },
    wealth: {
        slider: { title: "hours of work", range: 10, weight: 50, },
        checkers: { meetup: 100, },
        counters: { learning: 50, application: 25, },
    },
    happiness: {
        slider: { title: "how was your day", range: 25, weight: 20, },
        checkers: { sex: 200, event: 100, },
        counters: { meeting: 50, convo: 50, },
    },
    nodo: {
        slider: {},
        checkers: { weed: -200, alcohol: -100, porn: -100, sugar: -100 },
        counters: { caffeine: -50, tvshows: -50, badfood: -50 },
    }
  }

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
        body: JSON.stringify({ username, password, settings })
      })

      const user = await response.json()
      if (response.ok) {
       
        setUser({token: user.token, username: user.username})

        localStorage.setItem('username', user.username)
        localStorage.setItem('userId', user.userId)
        localStorage.setItem('token', user.token)

        jump('/intro1')
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

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <>
      { isDesktoporLaptop ? (
        <RegisterDesktop 
          onSubmit={onSubmit}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setLogReg={setLogReg}
          logIn={logIn}
          setLogIn={setLogIn}
          toggleSwitch={toggleSwitch}
        />
      ) : (
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
      )}
    </>
  )
}

export default Register
