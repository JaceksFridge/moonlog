

import React from 'react'
import Login from '../blocks/Login'
import Register from '../blocks/Register'

const LogRegDesktop = () => {
  return (
    <div className="logreg-desktop">
        <div className="logreg-background">
            <div className="logreg-card"></div>
            <div className="logreg-card2">
                <Login />
            </div>
        </div>
    </div>
  )
}

export default LogRegDesktop
