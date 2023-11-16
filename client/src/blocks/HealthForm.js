

import React from 'react'
// import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormCounters from './FormCounters'
import FormChecks from './FormChecks'

const HealthForm = ({ settings }) => {

  const [healthScores, setHealthScores] = useLocalStorage('health', {})

  const sliderChange = (sliderValue) => {
    setHealthScores(
      ...healthScores,
      ...sliderValue
    )
  }
  const checksChange = (checkValues) => {
    setHealthScores({
      ...healthScores, 
      ...checkValues
    })
  }
  const countersChange = (counterValues) => {
    setHealthScores({
      ...healthScores, 
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

  const formVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div className="healthForm"
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
                  stk="healthSlider"
                />
              </motion.div>
            );

          case 'checkers':
            return (
              <motion.div key={key}>
                <FormChecks
                  checksChange={checksChange}
                  form={form}
                  stk="healthCheckers"
                />
              </motion.div>
            );

          case 'counters':
            return (
              <motion.div key={key}>
                <FormCounters
                  countersChange={countersChange}
                  form={form}
                  stk="healthCounters"
                />
              </motion.div>
            );

          default:
            return null
        }
      })}
      <h2 className="invisible">{JSON.stringify(healthScores)}</h2>
    </motion.div>
  )
}

export default HealthForm
