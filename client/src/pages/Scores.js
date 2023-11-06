

import React, { useState, useEffect } from 'react'
import { CheckMarkSVG } from '../blocks/svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../blocks/Footer'

const Scores = () => {

    const server = process.env.REACT_APP_SERVER_URL
    const jump = useNavigate()

    const scores = JSON.parse(localStorage.getItem("prevSubmission"))
    console.log(scores)


    const pathVariantsOG = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 1.5,
            ease: 'easeInOut'
          }
        }
    }


  return (
    <div className="feedback-page">
        <div className="big-box">
            <div className="svg-container">
                <CheckMarkSVG 
                variants={pathVariantsOG}
                initial='hidden'
                animate='visible'
                />
            </div>
            <div className="sub-score-list">
                <div className="sub-score-item">
                    <div className="item-title satoshi-btn">health</div>
                    <div className="item-value satoshi-btn">+{scores.health ? scores.health : 0}</div>
                </div>
                <div className="sub-score-item">
                    <div className="item-title satoshi-btn">wealth</div>
                    <div className="item-value satoshi-btn">+{scores.wealth ? scores.wealth: 0}</div>
                </div>
                <div className="sub-score-item">
                    <div className="item-title satoshi-btn">happiness</div>
                    <div className="item-value satoshi-btn">+{scores.happiness ? scores.happiness : 0}</div>
                </div>
                <div className="sub-score-item">
                    <div className="item-title satoshi-btn">nodo</div>
                    <div className="item-value satoshi-btn">-{scores.nodo ? scores.happiness : 0}</div>
                </div>
            </div>
        </div>
        <div className="small-box satoshi-btn">
            Go to Dashboard
        </div>
        <div className="total-box">
            <h1 className="total-score">{scores.sum ? scores.sum : 0}</h1>
            <div className="total-text">This is your total score. You did very well today.</div>
        </div>
        <div className="continue-btn"></div>
        <button className="next" type="button" onClick={() => jump('/')}>
          <div className="iconarrow">
          <img src="/icons/nav_arrow.png" alt="" />
          </div>
        </button>
    </div>
  )
}

export default Scores
