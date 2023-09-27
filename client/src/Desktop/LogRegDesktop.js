

import React from 'react'
import Login from '../blocks/Login'
import Register from '../blocks/Register'
import { AnimatePresence } from 'framer-motion'

const LogRegDesktop = ({ toggleSwitch, logIn, setLogIn }) => {
  return (
    <div className="logreg-desktop">
        <div className="logreg-background">
            <div className="logreg-card"></div>
            <AnimatePresence>
                { logIn ? (
                    <div className="logreg-card2">
                        <Login />
                    </div>
                ) : (
                    <div className="logreg-card2">
                        <Register />
                    </div>
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default LogRegDesktop
