

import React, { useState, useEffect } from 'react'
import DayHalfDoughnutChart from '../Dashboard/DayHalfDoughnutChart'
import MainBarchart from '../Dashboard/MainBarchart'
import LogGrid from '../Dashboard/LogGrid'

const MainView = ({ data }) => {

  const [activeDay, setActiveDay] = useState(null)

  useEffect(() => {
    if (data && data[0]) {
      setActiveDay(data[0])
    }
  }, [data])




  return (
    <div className="mainview">
      <div className="main-center">
        <div className="top-row">
          <div className="title-box">
            <h2 className="title">Main Overview</h2>
          </div>
          <div className="info-box"></div>
          <div className="info-box"></div>
        </div>
        <div className="middle-row">
          <MainBarchart data={data ? data : null}/>
        </div>
        <div className="bottom-row">
          <LogGrid data={data ? data : null} setActiveDay={setActiveDay}/>
        </div>
      </div>
      { activeDay && (
          <div className="side-day">
            <div className="day-info">
              <h3 className="day-date">December, 25th</h3>
              <p className="day-line">+2.7% AVG.</p>
            </div>
            <div className="day-chart">
              <DayHalfDoughnutChart dataDay={activeDay}/>
            </div>
            <div className="day-subscores">
              <div className="subscore-grid">
                <div className="health grid-item">
                  <p className="subscore-name">health</p>
                  <p className="subscore-value">{activeDay.health ? activeDay.health : 0 }</p>
                  <div className="subscore-bar-container">
                    <div className="bar" style={{ width: `${(activeDay.health / activeDay.sum) * 100}%`}}></div>
                  </div>
                </div>
                <div className="wealth grid-item">
                  <p className="subscore-name">wealth</p>
                  <p className="subscore-value">{activeDay.wealth ? activeDay.wealth : 0 }</p>
                  <div className="subscore-bar-container">
                    <div className="bar" style={{ width: `${(activeDay.wealth / activeDay.sum) * 100}%`}}></div>
                  </div>
                </div>
                <div className="happiness grid-item">
                  <p className="subscore-name">happiness</p>
                  <p className="subscore-value">{activeDay.happiness ? activeDay.happiness : 0 }</p>
                  <div className="subscore-bar-container">
                    <div className="bar" style={{ width: `${(activeDay.happiness / activeDay.sum) * 100}%`}}></div>
                  </div>
                </div>
                <div className="nodo grid-item">
                  <p className="subscore-name">nodo</p>
                  <p className="subscore-value">{activeDay.nodo ? activeDay.nodo : 0 }</p>
                  <div className="subscore-bar-container">
                    <div className="bar" style={{ width: `${(activeDay.nodo / activeDay.sum) * 100}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="day-bottom-info">
              <div className="change-box">
                <p className="title">change</p>
                <h3 className="value">+23.4%</h3>
              </div>
              <div className="average-box">
                <p className="title">average</p>
                <h3 className="value">+2.12%</h3>
              </div>
            </div>
          </div>
      )}
    </div>
  )
}

export default MainView
