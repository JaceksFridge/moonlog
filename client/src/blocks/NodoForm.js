

import React from 'react'
// import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormChecks from './FormChecks'
import FormCounters from './FormCounters'



const NodoForm = ({ settings }) => {

  const [nodoScores, setNodoScores] = useLocalStorage('nodo', {})
  console.log("nodo settings", settings)

  const sliderChange = (sliderValues) => {
    setNodoScores({
      ...nodoScores,
      ...sliderValues
    })
  }
  const checksChange = (checkValues) => {
    setNodoScores({
      ...nodoScores, 
      ...checkValues
    })
  }
  const countersChange = (counterValues) => {
    setNodoScores({
      ...nodoScores,
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
      { settings.slider && Object.keys(settings.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            sliderChange={sliderChange}
            form={settings.slider}  
            stk="nodoSlider"
          />
        </motion.div>
      )},
      { settings.checkers && Object.keys(settings.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.checkers}  
            stk="nodoChecks"
          />
        </motion.div>
      )},
      { settings.counters && Object.keys(settings.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.counters}  
            stk="nodoCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(nodoScores)}</h2>
    </motion.div>
  )
}

export default NodoForm
