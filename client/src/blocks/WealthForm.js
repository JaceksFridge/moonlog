import React from 'react'
import { useLocalStorage } from './useLocalStorage'

import { wealthRepeats } from './constants'

import FormCounters from './FormCounters'
import FormSlider from './FormSlider'



const WealthForm = () => {

  const [wealthScores, setWealthScores] = useLocalStorage('wealth', {})

  const sliderChange = (sliderDifference) => {
    setWealthScore(wealthScore => wealthScore + sliderDifference * 50)
  }

  const countersChange = (counterValues) => {
    setWealthScore({
      ...wealthScores,
      ...counterValues
    })
  }


  return (
    <div className="wealthForm">
      <FormSlider 
        sliderChange={sliderChange}
        stk="wealthSlider"
      />
      <FormCounters 
        countersChange={countersChange}
        form={wealthRepeats}
        stk="wealthCounters"
      />
      <h2 className="invisible">{JSON.stringify(wealthScore)}</h2>
    </div>
  )
}

export default WealthForm
