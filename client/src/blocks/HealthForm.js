

import React from 'react'
// import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormCounters from './FormCounters'
import FormChecks from './FormChecks'

const HealthForm = ({ settings }) => {

  console.log("S E T T I N G S", settings.checkers)

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
      { Object.keys(settings.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            sliderChange={sliderChange}
            form={settings.slider}  
            stk="healthSlider"
          />
        </motion.div>
      )},
      { Object.keys(settings.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.checkers}  
            stk="healthChecks"
          />
        </motion.div>
      )},
      { Object.keys(settings.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.counters}  
            stk="healthCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(healthScores)}</h2>
    </motion.div>
  )
}

export default HealthForm
