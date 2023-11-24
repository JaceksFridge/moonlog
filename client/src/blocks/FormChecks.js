

import React from 'react'
import { useLocalStorage } from './useLocalStorage'
import { motion } from 'framer-motion'

const FormChecks = ({ form, checksChange, stk }) => {
 
  const [checkedBoxes, setCheckedBoxes] = useLocalStorage(stk, {})

  const handleChange = (event) => {
      const { name, checked } = event.target
      const scoreDifference = checked 
        ? form[name] 
        : 0

      console.log(`Checkbox ${name} changed: ${checked}`);
  
      const newCheckedBoxes = {
        ...checkedBoxes, 
        [name]: checked
      }
      setCheckedBoxes(newCheckedBoxes)
      console.log(`New checkedBoxes state:`, newCheckedBoxes);
      checksChange({ [name]: scoreDifference })
  }



  const itemVariants = (i) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.1 }
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  })
  

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


  return (
    <motion.div className="form-container morning">
        <div className="form-title">checks</div>
        <form action="">
        {Object.keys(form).map((key, i) => (

          <motion.div className="form-block" 
            key={key}
            variants={itemVariants(i)}
            initial='hidden'
            animate='visible'
          >
            <div className="conicon">
                <h5>{key}</h5>
            </div>
            <div className="checkbox-container">
                <input type="checkbox" id={`cbx-${key}`} className="cbx-hidden" onChange={handleChange} name={key} checked={checkedBoxes[key]}/>
                <label htmlFor={`cbx-${key}`} className="check">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                        <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                </label>
            </div>
          </motion.div>

        ))}
        </form>
    </motion.div>
  )
}

export default FormChecks


