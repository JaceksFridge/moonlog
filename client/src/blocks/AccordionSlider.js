

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { BoomerangSVG, SettingsBinSVG, SettingsBin2SVG } from "../blocks/svg"

const AccordionSlider = ({ settings, category, accordionKey ,isActive, toggleAccordion, addActivity, deleteAccordion }) => {




    const addButtonRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const [activities, setActivities] = useState(settings || {})
    const [activityName, setActivityName] = useState('')
    const [activityWeight, setActivityWeight] = useState('')
    const [activityUnit, setActivityUnit ] = useState('')
    const [activityRange, setActivityRange ] = useState('')
    const [maxValue, setMaxValue] = useState(0)
    const [isButtonActive, setIsButtonActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [sliderValue, setSliderValue] = useState(0)

    const handleName = (e) => {
        setActivityName(e.target.value)
    }
    const handleWeight = (e) => {
        setActivityWeight(e.target.value)
    }
    const handleUnit = (e) => {
        setActivityUnit(e.target.value)
    }
    const handleRange = (e) => {
        setActivityRange(e.target.value)
    }

    const handleSliderValue = (e) => {
        const value = e.target.value;
        setSliderValue(value);
    
        const percentage = (value / e.target.max) * 100;
    
        const slider = document.querySelector('.the-slider');
        slider.style.setProperty('--sliderValue', `${percentage}%`);
    };


    const handleAddButton = () => {

        if (!isButtonActive) {
            setErrorMessage('* ensure that every field is in the correct format')
            return
        } else {
            setErrorMessage('')
            const updatedActivities = {
                ...activities, 
                ['title']: activityName,
                ['unit']: activityUnit,
                ['range']: parseInt(activityRange, 10),
                ['weight']: parseInt(activityWeight, 10)
            }
            setMaxValue(parseInt(activityWeight * activityRange))
            setActivities(updatedActivities)
            addActivity(updatedActivities)
        }
    }

    useEffect(() => {
        setSliderValue(0)
        const slider = document.querySelector('.the-slider')
        if (slider) {
            slider.style.setProperty('--sliderValue', '0%')
        }
    }, [activityRange]);
    
    useEffect(() => {
        const isWeightNumeric = !isNaN(activityWeight) && isFinite(activityWeight);
        const isRangeNumeric = !isNaN(activityRange) && isFinite(activityRange);
        const isNameString = typeof activityName === 'string' && activityName.trim() !== '';
        const isUnitString = typeof activityUnit === 'string' && activityUnit.trim() !== '';
    
        if (addButtonRef.current && isWeightNumeric && isRangeNumeric && isNameString && isUnitString) {
            addButtonRef.current.classList.add("active");
            setIsButtonActive(true)
            
        } else if (addButtonRef.current) {
            addButtonRef.current.classList.remove("active");
            setIsButtonActive(false)
        }
    }, [activityName, activityUnit, activityWeight, activityRange]);





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
            <h3 className="title">Slider</h3>
            <div className="miniscores-container">
          
                <div className="mini-score">
                    <div className="mini-title">points</div>
                    <div className="dot"></div>
                    <div className="mini-value">{`0 - ${maxValue}`}</div>
                </div>
          
            </div>
            <div className={`icon-container ${isOpen ? 'is-rotating' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <BoomerangSVG />
            </div>
            
        </div>
        <AnimatePresence initial={false}>
            { isOpen && (
                <motion.div 
                    className="accordion-content slider-accordion"
                    key="content"
                    variants={AccordionContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    
                >
                    <motion.div variants={ChildVariants} className="accordion-inner-content">
                        <h3 className="content-title">Sliding for Ease</h3>
                        <p className="content-text">
                        The slider let's you set with ease things which you do often.
                        </p>
                        <div 
                            className="bin-icon"
                            onClick={() => deleteAccordion(category, accordionKey)}
                        >
                            <SettingsBinSVG />
                        </div>
                        <div className="value-box">
                            <div className="topbar">
                                <div className="topbar-title">{activityName || 'some activity'}</div>
                            </div>
                            <div className="display-content">
                                <div className="unit-value">
                                    <h1 className="value">{sliderValue || 0}</h1>
                                    <p className="unit">{activityUnit || 'hours of work'}</p>
                                </div>
                                <div className="border-line"></div>
                                <div className="slider-container">
                                    <input
                                        className="the-slider"
                                        type="range" 
                                        onChange={handleSliderValue}
                                        value={sliderValue || 0}
                                        min="0"
                                        max={activityRange || 10}
                                        step="0.5"
                                    />
                                </div>
                                <div className="value-displays">
                                    <div className="min-display"><p>0</p></div>
                                    <div className="max-display"><p>{activityRange || 10}</p></div>
                                </div>
                            </div>
 
                        </div>
                        <div className="settings-form">
                            <div className="name-container">
                                <label htmlFor="">Activity</label>
                                <input 
                                    type="text" 
                                    placeholder="worked today"
                                    onChange={handleName}
                                />
                            </div>
                            <div className="unit-container">
                                <label htmlFor="">Unit of Measure</label>
                                <input 
                                    type="text" 
                                    placeholder="hours"
                                    onChange={handleUnit}
                                />
                            </div>
                            <div className="weight-container">
                                <label htmlFor="">Weight</label>
                                <input 
                                    type="text" 
                                    placeholder="20"
                                    onChange={handleWeight}
                                />
                            </div>
                            <div className="range-container">
                                <label htmlFor="">Range</label>
                                <input 
                                    type="text" 
                                    placeholder="10"
                                    onChange={handleRange}
                                />
                            </div>
                            <div 
                                className="add-btn satoshi-btn"
                                ref={addButtonRef}
                                onClick={handleAddButton}
                            >
                                add
                            </div>
                            <p className="error-message">
                                {errorMessage}
                            </p>
                        </div>

                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default AccordionSlider
