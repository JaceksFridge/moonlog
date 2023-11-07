

import React, { useState, useEffect } from 'react'
import { CheckMarkSVG } from '../blocks/svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import Footer from '../blocks/Footer'

const Scores = () => {

    const server = process.env.REACT_APP_SERVER_URL
    const jump = useNavigate()

    const scores = JSON.parse(localStorage.getItem("prevSubmission"))
    const [animationComplete, setAnimationComplete] = useState(false);

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

    const itemVariants = (i, totalItems) => ({
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.2 },
          onAnimationComplete: () => {
            if (i === totalItems - 1) {
              setAnimationComplete(true);
            }
          }
        },
        hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      })

  
    const Number = ({ n }) => {
      const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: animationComplete ? 200 : 1100,
        config: { mass: 1, tension: 20, friction: 10}
      })
      return (
        <animated.div>
          {number.to((n) => n.toFixed(0))}
        </animated.div>
      )
    }

    const scoreCategories = ['health', 'wealth', 'happiness', 'nodo']
    const totalItems = scoreCategories.length

  return (
    <div className="feedback-page">
        <div className="big-box">
            <motion.div className="svg-container">
                <CheckMarkSVG 
                    variants={pathVariantsOG}
                    initial='hidden'
                    animate='visible'
                />
            </motion.div>
            <div className="sub-score-list">
            {scoreCategories.map((category, i) => (
                <motion.div className="sub-score-item" key={category} variants={itemVariants(i)} initial='hidden' animate='visible'>
                    <div className="item-title satoshi-btn">{category}</div>
                    <div className="item-value satoshi-btn">
                        {category !== 'nodo' ? '+' : '-'}{scores[category] ? scores[category] : 0}
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
        <div className="small-box satoshi-btn" onClick={() => jump('/dashboard')}>
            Go to Dashboard
        </div>
        <div className="total-box">
            <h1 className="total-score">
                <Number n={scores.sum ? scores.sum : 0} />
            </h1>
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
