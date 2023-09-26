

import React from 'react'
import { Link } from 'react-router-dom'

const IntroDesktop = ({ bg, title, text, prog, next }) => {
  return (
    <div className="introPage-desktop">
        <div className="intro-bg-desktop">
            <img src={bg} alt="Background" className="background-image"/>
        </div>
        <div className="intro-bg-side">
            <h2 className="intro-title">{title}</h2>
            <p className="intro-text">{text}</p>
            <Link
                className="intro-button"
                to={next}
            >
                <div className="arrow"></div>
            </Link>
        </div>
    </div>
  )
}

export default IntroDesktop
