

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
      {settings && Object.entries(settings).map(([key, form]) => {
        const formType = key.split('_')[0];
        switch(formType) {
          case 'slider':
            return (
              <motion.div key={key}>
                <FormSlider
                  sliderChange={sliderChange}
                  form={form}
                  stk="nodoSlider"
                />
              </motion.div>
            );

          case 'checkers':
            return (
              <motion.div key={key}>
                <FormChecks
                  checksChange={checksChange}
                  form={form}
                  stk="nodoCheckers"
                />
              </motion.div>
            );

          case 'counters':
            return (
              <motion.div key={key}>
                <FormCounters
                  countersChange={countersChange}
                  form={form}
                  stk="nodoCounters"
                />
              </motion.div>
            );

          default:
            return null
          }
        })}
      <h2 className="invisible">{JSON.stringify(nodoScores)}</h2>
    </motion.div>
  )
}

export default NodoForm
