

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { BoomerangSVG } from "../blocks/svg"

const AccordionCheckers = () => {


    const [isOpen, setIsOpen] = useState(false)



    const minValue = 0
    const maxValue = 250

    const mockData = {
        "morning run": 20,
        "meditation": 50,
        "take viatmins": 100,
    }


    const AccordionContentVariants = {
        hidden: { opacity: 0, height: 0, transition:{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] } },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] } }
    }
    const ChildVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    let sum = 0




  return (
    <div className="section-container">
        <div className="accordion-header">
            <div className="checkbox"></div>
            <h3 className="title">Chckers</h3>
            <div className="miniscores-container">
          
                <div className="mini-score">
                    <div className="mini-title">points</div>
                    <div className="dot"></div>
                    <div className="mini-value">{`${minValue} - ${maxValue}`}</div>
                </div>
          
            </div>
            <div className="icon-container" onClick={() => setIsOpen(!isOpen)}>
                <BoomerangSVG />
            </div>
            
        </div>
        <AnimatePresence initial={false}>
            { isOpen && (
                <motion.div 
                    className="accordion-content"
                    key="content"
                    variants={AccordionContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    
                >
                    <motion.div variants={ChildVariants} className="accordion-inner-content">
                        <h3 className="content-title">Sliding For Ease</h3>
                        <p className="content-text">
                            Under the checkers tab you’ll find things which won’t be 
                            possible to repeat during the day
                        </p>
                        <div className="value-box">
                            <div className="topbar">
                                <div className="topbar-title">activity</div>
                                <div className="topbar-title">points</div>
                            </div>
                            {
                                Object.entries(mockData).map(([key, value]) => {
                                sum += value
                                return (
                                    <div className="activity">
                                        <p className="activity-title">{key}</p>
                                        <p className="activity-value">{value}</p>
                                        <div className="bin">x</div>
                                    </div>
                                )
                            })}
                            <div className="total-activity">
                                <p className="activity-title">total points</p>
                                <p className="activity-value">{sum}</p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default AccordionCheckers
