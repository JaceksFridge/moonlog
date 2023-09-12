import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'


const FormCounters = ({ countersChange, form, stk }) => {

  const [counters, setCounters] = useLocalStorage(stk, {})

  const handlePlusMinus = (key, isPlus) => {
    const currentCounterValue = counters[key] || 0
    const updatedCounterValue = isPlus ? currentCounterValue + 1 : Math.max(currentCounterValue - 1, 0)
    const weightedCounterValue = updatedCounterValue * form[key]
  
    setCounters(prevCounters => ({...prevCounters, [key]: updatedCounterValue}))
    countersChange({ [key]: weightedCounterValue });
  };


  const formVariants = {
    visible: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    hidden: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }

  const itemVariants = (i) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.1 }
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  })


  return (
    <div className="form-container">
      <div className="form-title">repeats</div>
      <motion.form action=""
        variants={formVariants}
        initial='hidden'
        animate='visible'
      >
        {Object.keys(form).map((key, i) => (

          <motion.div className="form-block"
            key={key}
            variants={itemVariants(i)}  
          >
            <div className="conicon">
              <h5>{key}</h5>
            </div>
            <div className="counter-container">
              <button type="button" className="minus" onClick={() => handlePlusMinus(key, false)}>-</button>
              <div className="count">{counters[key] || 0}</div>
              <button type="button" className="plus" onClick={() => handlePlusMinus(key, true)}>+</button>
            </div>
          </motion.div>

      ))}
      </motion.form>
    </div>
  )
}

export default FormCounters
