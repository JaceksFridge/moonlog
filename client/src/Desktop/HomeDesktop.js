import React from 'react'

const HomeDesktop = ({ user, userData }) => {
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
                  <h4 className="stat-value">1240</h4>
                </div>
                <div className="stats-change">
                  <h4 className="stat-title">change:</h4>
                  <h4 className="stat-value">+23.56%</h4>
                </div>
              </div>
              <div className="stats-right">
                <div className="stats-total">
                  <h4 className="stat-title">sub-scores:</h4>
                </div>
                <div className="sub-score">
                  <h4 className="sub-score-value">000</h4>
                  <h4 className="sub-score-title">health</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="empty-scroll"></div>
          <div className="scrollable-container">
            <div className="card-container">
              <div className="home-card one"></div>
              <div className="home-card two"></div>
              <div className="home-card three"></div>
              <div className="home-card"></div>
              <div className="lset">
                <div className="logout-btn">
                    <div className="text">logout</div>
                </div>
                <div className="settings-btn">
                  <div className="text">settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDesktop
