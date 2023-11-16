

import React from 'react'
// import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormChecks from './FormChecks'
import FormCounters from './FormCounters'



const WealthForm = ({ settings }) => {

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
      {settings && Object.entries(settings).map(([key, form]) => {

        const formType = key.split('_')[0];
        switch(formType) {
          case 'slider':
            return (
              <motion.div key={key}>
                <FormSlider
                  sliderChange={sliderChange}
                  form={form}
                  stk="wealthSlider"
                />
              </motion.div>
            );

          case 'checkers':
            return (
              <motion.div key={key}>
                <FormChecks
                  checksChange={checksChange}
                  form={form}
                  stk="wealthCheckers"
                />
              </motion.div>
            );

          case 'counters':
            return (
              <motion.div key={key}>
                <FormCounters
                  countersChange={countersChange}
                  form={form}
                  stk="wealthCounters"
                />
              </motion.div>
            );

          default:
            return null
        }
        })}
      <h2 className="invisible">{JSON.stringify(wealthScores)}</h2>
    </motion.div>
  )
}

export default WealthForm
