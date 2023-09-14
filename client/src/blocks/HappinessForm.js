

import React from 'react'
import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'
import FormSlider from './FormSlider'


const HappinessForm = () => {

  const [happinessScores, setHappinessScores] = useLocalStorage('happiness', {})

  const sliderChange = (sliderValue) => {
    setHappinessScores({
      ...happinessScores,
      ...sliderValue
    })
  }
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
      { Object.keys(settings.happiness.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            sliderChange={sliderChange}
            form={settings.happiness.slider}  
            stk="happinessSlider"
          />
        </motion.div>
      )},
      { Object.keys(settings.happiness.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.happiness.checkers}  
            stk="happinessChecks"
          />
        </motion.div>
      )},
      { Object.keys(settings.happiness.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.happiness.counters}  
            stk="happinessCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(happinessScores)}</h2>
    </motion.div>
  )
}

export default HappinessForm
