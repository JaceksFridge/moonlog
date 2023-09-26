

import React from 'react'

const IntroDesktop = ({ bg, title, text, prog, next }) => {
  return (
    <div className="introPage-desktop">
        <div className="intro-bg-desktop">
            <img src={bg} alt="Background" className="background-image"/>
        </div>
        <div className="intro-bg-side">
            <div>Intro Page</div>
        </div>
    </div>
  )
}

export default IntroDesktop
