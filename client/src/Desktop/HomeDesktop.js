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
                <div className="stats-total">total</div>
                <div className="stats-change">change</div>
              </div>
              <div className="stats-right">
                <div className="stats-health">health</div>
                <div className="stats-happiness">happiness</div>
                <div className="stats-wealth">wealth</div>
                <div className="stats-nodo">nodo</div>
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