

import React from 'react'
// import { healthChecks, healthRepeats } from './constants'
import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormCounters from './FormCounters'
import FormChecks from './FormChecks'

const HealthForm = () => {

  console.log(settings.health)
  const [healthScores, setHealthScores] = useLocalStorage('health', {})

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

  const sliderChange = (sliderValue) => {
    setHealthScores(
      ...healthScores,
      ...sliderValue
    )
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
      { Object.keys(settings.health.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            checksChange={sliderChange}
            form={settings.health.slider}  
            stk="healthSlider"
          />
        </motion.div>
      )},
      { Object.keys(settings.health.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.health.checkers}  
            stk="healthChecks"
          />
        </motion.div>
      )},
      { Object.keys(settings.health.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.health.counters}  
            stk="healthCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(healthScores)}</h2>
    </motion.div>
  )
}

export default HealthForm
