

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const IntroDesktop = ({ bg, title, text, prog, next }) => {

    const jump = useNavigate()
    

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            jump(next)
        }
    }
    

  return (
    <div 
        className="introPage-desktop"
        tabIndex="0"
        onKeyPress={handleKeyPress}
    >
        <div className="intro-bg-desktop">
            <img src={bg} alt="Background" className="background-image"/>
            <div className="dark-overlay">
                <div className="intro-nav">
                    <div className="intro-prog">
                        <img src={prog} alt="" />
                    </div>
                    <div 
                        onClick={() => jump("/")}
                        className="intro-skip"
                    >Skip
                    </div>
                </div>
            </div>
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
