

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { BoomerangSVG, SettingsBinSVG, SettingsBin2SVG } from "../blocks/svg"

const AccordionCheckers = ({ settings, category, accordionKey ,isActive, toggleAccordion, addActivity, deleteAccordion }) => {


    // console.log('checkers object', accordionKey,'is active?', isActive)

    const addButtonRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const [activities, setActivities] = useState(settings || {})
    const [activityName, setActivityName] = useState('')
    const [activityValue, setActivityValue] = useState('')
    const [maxValue, setMaxValue] = useState(0)

    const handleName = (e) => {
        setActivityName(e.target.value)
    }
    const handleValue = (e) => {
        setActivityValue(e.target.value)
    }
    const handleAddButton = () => {
        const updatedActivities = {
            ...activities, 
            [activityName]: parseInt(activityValue, 10)
        }
        setActivities(updatedActivities)
        addActivity(updatedActivities)
    }

    const deleteActivity = (key) => {
        setActivities(prevActivities => {
            const newActivities = { ...prevActivities }
            delete newActivities[key]
            return newActivities
        })
    }

    
    useEffect(() => {
        if (addButtonRef.current && activityName && activityValue) {
            addButtonRef.current.classList.add("active")
        } else if (addButtonRef.current) {
            addButtonRef.current.classList.remove("active")
        }
    }, [activityName, activityValue])

    useEffect(() => {
        let total = 0;
        if (activities) {
            Object.values(activities).forEach(value => {
                total += value;
            });
            setMaxValue(total);
        }
    }, [activities])


    const minValue = 0
    // const maxValue = 250




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


  return (
    <div className="section-container">
        <div className={`accordion-header ${isActive ? 'active' : 'inactive'}`}>
            <div className="checkbox">
            {/* <input 
                type="checkbox" 
                checked={isActive} 
                onChange={() => console.log(category, accordionKey, isActive)} 
                id="checkbox"
                className="cbx-hidden" 
            /> */}
            <input 
                type="checkbox"
                checked={isActive}
                onChange={() => toggleAccordion(category, accordionKey, isActive)} 
                // onChange={() => console.log(category, accordionKey, isActive)}
                name={accordionKey}
                id={accordionKey}
                className="cbx-hidden"
            />
            <label htmlFor={accordionKey} className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
            </div>
            <h3 className="title">Checkers</h3>
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
                        <h3 className="content-title">The Things You do Once</h3>
                        <p className="content-text">
                        Under the checkers tab you’ll find things which won’t be possible to repeat during the day
                        </p>
                        <div 
                            className="bin-icon"
                            onClick={() => deleteAccordion(category, accordionKey)}
                        >
                            <SettingsBinSVG />
                        </div>
                        <div className="value-box">
                            <div className="topbar">
                                <div className="topbar-title">activity</div>
                                <div className="topbar-title">points</div>
                            </div>
                            {
                                Object.entries(activities).map(([key, value]) => {
                                return (
                                    <div className="activity" key={key}>
                                        <p className="activity-title">{key}</p>
                                        <p className="activity-value">{value}</p>
                                        <div 
                                            className="bin"
                                            onClick={() => deleteActivity(key)}
                                        >x</div>
                                    </div>
                                )
                            })}
                            <div className="total-activity">
                                <p className="activity-title">total points</p>
                                <p className="activity-value">{maxValue}</p>
                            </div>
                        </div>
                        <div className="settings-form">
                            <div className="name-container">
                                <label htmlFor="">Activity/Task</label>
                                <input 
                                    type="text" 
                                    placeholder="some activity"
                                    onChange={handleName}
                                />
                            </div>
                            <div className="value-container">
                                <label htmlFor="">Importance</label>
                                <input 
                                    type="text" 
                                    placeholder="250"
                                    onChange={handleValue}
                                />
                            </div>
                            <div 
                                className="add-btn satoshi-btn"
                                ref={addButtonRef}
                                onClick={handleAddButton}
                            >
                                add
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
