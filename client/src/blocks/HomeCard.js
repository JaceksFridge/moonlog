import React from 'react'

const HomeCard = ({ title, text, id, icon }) => {
  return (
    <div 
        className="home-card"
        id={id}
    >
        <div className="home-card-left">
            <h2 className="home-card-title">{title}</h2>
            <p className="home-card-text">{text}</p>
        </div>
        <div className="home-card-right">
            <div className="home-card-icon">
                <img src={icon} alt={title} />
            </div>
        </div>
    </div>
  )
}

export default HomeCard
