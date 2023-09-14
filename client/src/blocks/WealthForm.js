

import React from 'react'
import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormChecks from './FormChecks'
import FormCounters from './FormCounters'



const WealthForm = () => {

  const [wealthScores, setWealthScores] = useLocalStorage('wealth', {})
  
  const sliderChange = (sliderValues) => {
    setWealthScores({
      ...wealthScores,
      ...sliderValues
    })
  }
  const checksChange = (checkValues) => {
    setWealthScores({
      ...wealthScores, 
      ...checkValues
    })
  }
  const countersChange = (counterValues) => {
    setWealthScores({
      ...wealthScores,
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
    <motion.div className="wealthForm"
      variants={pageVariants}
      initial='hidden'
      animate='visible'
    >
      { Object.keys(settings.wealth.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            sliderChange={sliderChange}
            form={settings.wealth.slider}  
            stk="wealthSlider"
          />
        </motion.div>
      )},
      { Object.keys(settings.wealth.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.wealth.checkers}  
            stk="wealthChecks"
          />
        </motion.div>
      )},
      { Object.keys(settings.wealth.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.wealth.counters}  
            stk="wealthCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(wealthScores)}</h2>
    </motion.div>
  )
}

export default WealthForm
