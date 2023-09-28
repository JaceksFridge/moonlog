

import React from 'react'
import Login from '../blocks/Login'
import Register from '../blocks/Register'
import { AnimatePresence } from 'framer-motion'

const LogRegDesktop = ({ logIn, setLogIn, toggleSwitch, setLogReg, logReg }) => {

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
                            logReg={logReg}
                            setLogReg={setLogReg}
                        />
                    </div>
                ) : (
                    <div className="logreg-card2">
                        <Register 
                            logIn={logIn}
                            setLogIn={setLogIn}
                            toggleSwitch={toggleSwitch}
                            logReg={logReg}
                            setLogReg={setLogReg}
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default LogRegDesktop
