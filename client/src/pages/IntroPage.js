import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const IntroPage = ({bg, title, text, prog, next}) => {

  const jump = useNavigate()

  return (
    <div className="introPage">
        <div className="intro-bg">
          <img src={bg} alt="Background" className="background-image"/>
          <div className="dark-overlay">
            <div className="intro-nav">
              <div className="intro-prog">
                <img src={prog} alt="" />
              </div>
              <div 
                onClick={() => jump("/logreg")}
                className="intro-skip"
              >Skip
              </div>
            </div>
          </div>
        </div>
        <div className="intro-bottom">
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

export default IntroPage
