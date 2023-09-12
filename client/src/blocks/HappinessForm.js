import React from 'react'
import { happinessSlider, happinessChecks, happinessRepeats } from './constants'
import { useLocalStorage } from './useLocalStorage'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'
import FormSlider from './FormSlider'

const HappinessForm = () => {


  const [happinessScores, setHappinessScores] = useLocalStorage('happiness', 0)

  const sliderChange = (sliderValue) => {
    setHappinessScores({
      ...happinessScores,
      ...sliderValue
    })
  }

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


  return (
    <div className="happinessForm">
      <FormSlider 
        sliderChange={sliderChange}
        form={happinessSlider}
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
      <h2 className="invisible">{JSON.stringify(happinessScores)}</h2>
    </div>
  )
}

export default HappinessForm
