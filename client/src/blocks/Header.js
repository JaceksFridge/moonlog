import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <Link to="/" className="link">
            <div className="header-container">
                <h2>Moonlog.</h2>
            </div>
        </Link>
    </div>
  )
}

export default Header
