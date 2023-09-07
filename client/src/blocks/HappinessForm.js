import React from 'react'
import { happinessChecks, happinessRepeats } from './constants'
import { useLocalStorage } from './useLocalStorage'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'
import FormSlider from './FormSlider'

const HappinessForm = () => {


  const [happinessScore, setHappinessScore] = useLocalStorage('happiness', 0)


  const sliderChange = (sliderDifference) => {
    setHappinessScore(happinessScore => happinessScore + sliderDifference * 50)
  }

  const checksChange = (checksDifference) => {
    setHappinessScore(happinessScore => happinessScore + checksDifference)
  }

  const countersChange = (countersDifference) => {
    setHappinessScore(happinessScore => happinessScore + countersDifference)
  }




  return (
    <div className="happinessForm">
      <FormSlider 
        sliderChange={sliderChange}
        stk="happinessSlider"
      />
      <FormChecks
        checksChange={checksChange}
        form={happinessChecks}  
        stk="happinessChecks"
      />
      <FormCounters 
        countersChange={countersChange}
        form={happinessRepeats}
        stk="happinessCounters"
      />
      <h2 className="invisible">{happinessScore}</h2>
    </div>
  )
}

export default HappinessForm
