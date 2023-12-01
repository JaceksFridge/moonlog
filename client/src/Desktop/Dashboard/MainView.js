

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DayHalfDoughnutChart from '../Dashboard/DayHalfDoughnutChart'
import MainBarchart from '../Dashboard/MainBarchart'
import LogGrid from '../Dashboard/LogGrid'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const MainView = ({ data, message }) => {

  const [activeDay, setActiveDay] = useState(null)
  const [overAvg, setOverAvg] = useState(null)
  
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const calculateAvgIncrease = (data) => {
    if (activeDay) {
      let sum = 0;
      let count = 0;
      data.forEach(entry => {
        sum += entry.sum;
        count += 1;
      });
      const averageSum = sum / count;
      const percentIncrease = parseFloat((((activeDay.sum / averageSum) - 1) * 100).toFixed(2))
      // console.log("percent Increase", percentIncrease)
      setOverAvg(percentIncrease)
    }
  };

  useEffect(() => {
    if (data && data[0]) {
      setActiveDay(data[0])
    }
  }, [data])

  useEffect(() => {
    if (activeDay) {
      calculateAvgIncrease(data)
    }
  })


  const progressVariants = {
    hidden: { width: "0px" },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1, ease: "easeInOut" } 
    })
  }





  return (
    <div className="mainview">
      <div className="main-center">
        <div className="top-row">
          <div className="title-box">
            <h2 className="title">Main Overview</h2>
            <p className="message">{message ? message : ''}</p>
          </div>
          <div className="info-box">
            <Carousel autoPlay infiniteLoop emulateTouch swipeable>
              <div className="minichart health">health</div>
              <div className="minichart wealth">wealth</div>
              <div className="minichart wealth">3</div>
            </Carousel>
          </div>
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
                    <motion.div 
                      className="bar" 
                      variants={progressVariants}
                      initial="initial"
                      animate="visible"
                      custom={activeDay.health && activeDay.sum ? (activeDay.health / activeDay.sum) * 100 : 0 }
                    ></motion.div>
                  </div>
                </div>
                <div className="wealth grid-item">
                  <p className="subscore-name">wealth</p>
                  <p className="subscore-value">{activeDay.wealth ? activeDay.wealth : 0 }</p>
                  <div className="subscore-bar-container">
                    <motion.div 
                      className="bar" 
                      variants={progressVariants}
                      initial="initial"
                      animate="visible"
                      custom={activeDay.health && activeDay.sum ? (activeDay.health / activeDay.sum) * 100 : 0 }
                    ></motion.div>
                  </div>
                </div>
                <div className="happiness grid-item">
                  <p className="subscore-name">happiness</p>
                  <p className="subscore-value">{activeDay.happiness ? activeDay.happiness : 0 }</p>
                  <div className="subscore-bar-container">
                    <motion.div 
                      className="bar" 
                      variants={progressVariants}
                      initial="initial"
                      animate="visible"
                      custom={activeDay.health && activeDay.sum ? (activeDay.health / activeDay.sum) * 100 : 0 }
                    ></motion.div>
                  </div>
                </div>
                <div className="nodo grid-item">
                  <p className="subscore-name">nodo</p>
                  <p className="subscore-value">{activeDay.nodo ? activeDay.nodo : 0 }</p>
                  <div className="subscore-bar-container">
                    <motion.div 
                      className="bar" 
                      variants={progressVariants}
                      initial="initial"
                      animate="visible"
                      custom={activeDay.health && activeDay.sum ? (activeDay.health / activeDay.sum) * 100 : 0 }
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="day-bottom-info">
              <div className="change-box">
                <p className="title">change</p>
                <h3 className="value">{`${activeDay.change ? activeDay.change : 0 }%`}</h3>
              </div>
              <div className="average-box">
                <p className="title">average</p>
                <h3 className="value">{`${overAvg ? overAvg : 0 }%`}</h3>
              </div>
            </div>
          </div>
      )}
    </div>
  )
}

export default MainView
