import React, { useState, useEffect } from 'react'
import { checkMarkSVG } from '../blocks/svg'

const Scores = () => {

    const server = process.env.REACT_APP_SERVER_URL


    const scores = JSON.parse(localStorage.getItem("prevSubmission"))
    console.log(scores)



  return (
    <div className="feedback-page">
        <div className="big-box">
            <checkMarkSVG />
            <div className="sub-score-list">
                <div className="sub-score-item">
                    <div className="item-title">health</div>
                    <div className="item-value">{scores.health ? scores.health : 0}</div>
                </div>
                <div className="sub-score-item">
                    <div className="item-title">wealth</div>
                    <div className="item-value">{scores.wealth ? scores.wealth: 0}</div>
                </div>
                <div className="sub-score-item">
                    <div className="item-title">happiness</div>
                    <div className="item-value">{scores.happiness ? scores.happiness : 0}</div>
                </div>
                <div className="sub-score-item">
                    <div className="item-title">nodo</div>
                    <div className="item-value">{scores.nodo ? scores.happiness : 0}</div>
                </div>
            </div>
        </div>
        <div className="small-box satoshi-btn">
            Go to Dashboard
        </div>
        <div className="total-box"></div>
        <div className="continue-btn"></div>
    </div>
  )
}

export default Scores
