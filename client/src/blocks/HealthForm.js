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
      <motion.div
      >
        <FormChecks
          checksChange={checksChange}
          form={healthChecks}  
          stk="healthChecks"
        />
      </motion.div>
      <motion.div
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
