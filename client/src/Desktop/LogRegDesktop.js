

import React from 'react'
import Login from '../blocks/Login'
import Register from '../blocks/Register'
import { AnimatePresence } from 'framer-motion'

const LogRegDesktop = ({ logIn, setLogIn, toggleSwitch }) => {

    console.log("loginnnnn")
    console.log(logIn)
  return (
    <div className="logreg-desktop">
        <div className="logreg-background">
            <div className="logreg-card"></div>
            <AnimatePresence>
                { logIn ? (
                    <div className="logreg-card2">
                        <Login 
                            logIn={logIn}
                            setLogIn={setLogIn}
                            toggleSwitch={toggleSwitch}
                        />
                    </div>
                ) : (
                    <div className="logreg-card2">
                        <Register 
                            logIn={logIn}
                            setLogIn={setLogIn}
                            toggleSwitch={toggleSwitch}
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default LogRegDesktop
