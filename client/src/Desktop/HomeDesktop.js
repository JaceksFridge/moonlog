

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardSidebarDesktop from './Dashboard/DashboardSidebarDesktop'
import { SidebarLogoSVG } from '../blocks/svg';
import Number from '../blocks/Number'

const HomeDesktop = ({ user, userData, cards }) => {

  // sidebar
  const jump = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleTabChange = (tab) => {
    jump("/dashboard", { state: { activeTab: tab } });
  }


  //number 
  const [animateMainScore, setAnimateMainScore] = useState(false);
  const [animateChange, setAnimateChange] = useState(false);
  const onSubScoresAnimationRest = () => {
    setAnimateMainScore(true);
  };
  const onMainScoreAnimationRest = () => {
    setAnimateChange(true);
  };

  return (
    <div className="home-desktop">
      {/* <DashboardSidebarDesktop 
        activePageProp='forms'
        handleTabChange={handleTabChange}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      /> */}
      <div className="topbar">
        {/* <div className="logo-block">Moonlog</div> */}
        <div className="logo-block2" onClick={() => jump('/')}>
          <SidebarLogoSVG />
        </div>
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
                  <h4 className="stat-value">
                    {/* {userData && userData.sum ? userData.sum : "0000"} */}
                    { !animateMainScore ? ( <Number n={0} /> ) : (
                      <Number n={userData && userData.sum ? userData.sum : 0} onRest={onMainScoreAnimationRest}/> 
                    )}
                  </h4>
                </div>
                <div className="stats-change">
                  <h4 className="stat-title">change:</h4>
                  <h4 className="stat-value">
                  {animateChange ? (
                    <>
                      {userData && userData.change && userData.change > 0 ? '+' : ''}
                      <Number n={Math.abs(userData && userData.change ? userData.change : 0)} />
                      {'%'}
                    </>
                  ) : (
                    '0%'
                  )}
                  </h4>
                </div>
              </div>
              <div className="stats-right">
                <div className="sub-score-container">
                  <h4 className="stat-title">sub-scores:</h4>
                  <div className="title-values">
                    <div className="sub-score-values">
                      <h4 className="sub-score-value"><Number n={userData && userData.health ? userData.health : 0} onRest={onSubScoresAnimationRest} /></h4>
                      <h4 className="sub-score-value"><Number n={userData && userData.wealth ? userData.wealth : 0} onRest={onSubScoresAnimationRest} /></h4>
                      <h4 className="sub-score-value"><Number n={userData && userData.happiness ? userData.happiness : 0} onRest={onSubScoresAnimationRest} /></h4>
                      <h4 className="sub-score-value"><Number n={userData && userData.nodo ? userData.nodo * -1 : 0} onRest={onSubScoresAnimationRest} /></h4>
                      {/* <h4 className="sub-score-value">{userData && userData.nodo ? (userData.nodo > 0 ? '-' : '') + userData.nodo : "000"}</h4> */}
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
