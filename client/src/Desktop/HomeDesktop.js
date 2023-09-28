

import React from 'react'

const HomeDesktop = ({ user, userData, cards }) => {

  return (
    <div className="home-desktop">
      <div className="topbar">
        <div className="logo-block">Moonlog</div>
      </div>
      <div className="home-main">
        <div className="home-static">
          <video autoPlay muted loop>
            <source src="/videos/moonanim.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="home-absolute">
          <div className="static-container">
            <h1 className="home-welcome">Welcome, <span>{user ? user.username : "Guest"}</span></h1>
            <div className="stats-container">
              <div className="stats-left">
                <div className="stats-total">
                  <h4 className="stat-title">total score:</h4>
                  <h4 className="stat-value">{userData && userData.sum ? userData.sum : "0000"}</h4>
                </div>
                <div className="stats-change">
                  <h4 className="stat-title">change:</h4>
                  <h4 className="stat-value">{userData && userData.change 
                    ? (userData.change > 0 ? '+' : '') + userData.change : '0'}%
                  </h4>
                </div>
              </div>
              <div className="stats-right">
                <div className="sub-score-container">
                  <h4 className="stat-title">sub-scores:</h4>
                  <div className="title-values">
                    <div className="sub-score-values">
                      <h4 className="sub-score-value">{userData && userData.health ? userData.health : "000"}</h4>
                      <h4 className="sub-score-value">{userData && userData.wealth ? userData.wealth : "000"}</h4>
                      <h4 className="sub-score-value">{userData && userData.happiness ? userData.happiness : "000"}</h4>
                      <h4 className="sub-score-value">{userData && userData.nodo ? (userData.nodo > 0 ? '-' : '') + userData.nodo : "000"}</h4>
                    </div>
                    <div className="sub-score-titles">
                      <h4 className="sub-score-title">health</h4>
                      <h4 className="sub-score-title">wealth</h4>
                      <h4 className="sub-score-title">happiness</h4>
                      <h4 className="sub-score-title">nodo</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="empty-scroll"></div>
          <div className="scrollable-container">
            <div className="card-container">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDesktop
