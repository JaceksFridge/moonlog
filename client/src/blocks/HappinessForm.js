

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
      {settings && Object.entries(settings).map(([key, form]) => {

        const formType = key.split('_')[0];
        switch(formType) {
          case 'slider':
            return (
              <motion.div key={key}>
                <FormSlider
                  sliderChange={sliderChange}
                  form={form}
                  stk="happinessSlider"
                />
              </motion.div>
            );

          case 'checkers':
            return (
              <motion.div key={key}>
                <FormChecks
                  checksChange={checksChange}
                  form={form}
                  stk="happinessCheckers"
                />
              </motion.div>
            );

          case 'counters':
            return (
              <motion.div key={key}>
                <FormCounters
                  countersChange={countersChange}
                  form={form}
                  stk="happinessCounters"
                />
              </motion.div>
            );

          default:
            return null
        }
      })}
      <h2 className="invisible">{JSON.stringify(happinessScores)}</h2>
    </motion.div>
  )
}

export default HappinessForm
