

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
  const { setUser, fetchUserData } = useContext(UserContext)
  const jump = useNavigate()

  // Dummy Settings
  const settings = {
    health: {
        inactive: {
          slider_1000: {},
          checkers_1001: { yoga: 100, run: 100, climb: 50 },
          counters_1002: { workout: 50, stretch: 50, walk: 50, }
        },
        active: {
          checkers_1003: { yoga: 100, run: 100, climb: 50 },
          counters_1004: { workout: 50, stretch: 50, walk: 50, }
        }
    },
    wealth: {
        inactive: {},
        active: {
          slider_1005: { title: "hoursofwork", range: 10, weight: 50, },
          checkers_1006: { meetup: 100, },
          counters_1007: { learning: 50, application: 25, },
        }
    },
    happiness: {
      inactive: {},
      active: {
        slider_1008: { title: "hoursofwork", range: 10, weight: 50, },
        checkers_1009: { meetup: 100, },
        counters_1010: { learning: 50, application: 25, },
      }
    },
    nodo: {
      inactive: {},
      active: {
        slider_1011: { title: "hours of workkk", range: 10, weight: 50, },
        checkers_1012: { meetup: 100, },
        counters_1013: { learning: 50, application: 25, },
      }
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
        
        setUser({token: user.token, username: user.username, userId: user.userId})

        localStorage.setItem('username', user.username)
        localStorage.setItem('userId', user.userId)
        localStorage.setItem('token', user.token)

        await fetchUserData(user.userId);

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
