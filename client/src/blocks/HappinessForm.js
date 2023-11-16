

import React from 'react'
// import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'
import FormSlider from './FormSlider'


const HappinessForm = ({ settings }) => {

  const [happinessScores, setHappinessScores] = useLocalStorage('happiness', {})

  const sliderChange = (sliderValue) => {
    console.log("functiooooon")
    if (typeof happinessScores !== 'object' || happinessScores === null) {
      console.error('happinessScores is not an object:', happinessScores);
      return;
    }
    if (typeof sliderValue !== 'object' || sliderValue === null) {
      console.error('sliderValue is not an object:', sliderValue);
      return;
    }
  
    setHappinessScores({
      ...happinessScores,
      ...sliderValue
    });
  };
  
  const checksChange = (checkValues) => {
    setHappinessScores({
      ...happinessScores,
      ...checkValues
    })
  }
  const countersChange = (counterValues) => {
    setHappinessScores({
      ...happinessScores,
      ...counterValues
    })
  }

  const pageVariants = {
    hidden: {
      
    },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.7
      }
    }
  }

  return (
    <motion.div className="happinessForm"
      variants={pageVariants}
      initial='hidden'
      animate='visible'
    >
      { settings.slider && Object.keys(settings.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            sliderChange={sliderChange}
            form={settings.slider}  
            stk="happinessSlider"
          />
        </motion.div>
      )},
      { settings.checkers && Object.keys(settings.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.checkers}  
            stk="happinessChecks"
          />
        </motion.div>
      )},
      { settings.counters && Object.keys(settings.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.counters}  
            stk="happinessCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(happinessScores)}</h2>
    </motion.div>
  )
}

export default HappinessForm
