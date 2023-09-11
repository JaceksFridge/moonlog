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
          </div>
          <div className="empty-scroll"></div>
          <div className="scrollable-container">
            <div className="card-container">
              <div className="home-card"></div>
              <div className="home-card two"></div>
              <div className="home-card three"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDesktop
