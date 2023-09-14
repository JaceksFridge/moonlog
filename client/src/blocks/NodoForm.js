

import React from 'react'
// import { settings } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormSlider from './FormSlider'
import FormChecks from './FormChecks'
import FormCounters from './FormCounters'



const NodoForm = ({ settings }) => {

  const [nodoScores, setNodoScores] = useLocalStorage('nodo', {})

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
      { Object.keys(settings.nodo.slider).length !== 0 && (
        <motion.div>
          <FormSlider
            sliderChange={sliderChange}
            form={settings.nodo.slider}  
            stk="wealthSlider"
          />
        </motion.div>
      )},
      { Object.keys(settings.nodo.checkers).length !== 0 && (
        <motion.div>
          <FormChecks
            checksChange={checksChange}
            form={settings.nodo.checkers}  
            stk="wealthChecks"
          />
        </motion.div>
      )},
      { Object.keys(settings.nodo.counters).length !== 0 && (
        <motion.div>
          <FormCounters
            countersChange={countersChange}
            form={settings.nodo.counters}  
            stk="wealthCounters"
          />
        </motion.div>
      )}
      <h2 className="invisible">{JSON.stringify(nodoScores)}</h2>
    </motion.div>
  )
}

export default NodoForm
