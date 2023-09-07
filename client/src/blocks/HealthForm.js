import React from 'react'
import { healthChecks, healthRepeats } from './constants'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'

const HealthForm = () => {

  const [healthScore, setHealthScore] = useLocalStorage('health', 0)

  const checksChange = (checksDifference) => {
    setHealthScore(healthScore => healthScore + checksDifference)
  }

  const countersChange = (countersDifference) => {
    setHealthScore(healthScore => healthScore + countersDifference)
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
  };
  

  return (
    <motion.div className="healthForm"
      variants={pageVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        variants={formVariants}
      >
        <FormChecks
          checksChange={checksChange}
          form={healthChecks}  
          stk="healthChecks"
        />
      </motion.div>
      <motion.div
        variants={formVariants}
        initial='hidden'
        animate='visible'
      >
        <FormCounters 
          countersChange={countersChange}
          form={healthRepeats}
          stk="healthCounters"
        />
      </motion.div>
      <h2 className="invisible">{healthScore}</h2>
    </motion.div>
  )
}

export default HealthForm
