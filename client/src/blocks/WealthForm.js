import React from 'react'
import { useLocalStorage } from './useLocalStorage'

import { wealthSlider, wealthRepeats } from './constants'

import FormCounters from './FormCounters'
import FormSlider from './FormSlider'



const WealthForm = () => {

  const [wealthScores, setWealthScores] = useLocalStorage('wealth', {})

  const sliderChange = (sliderValues) => {
    setWealthScores({
      ...wealthScores,
      ...sliderValues
    })
  }

  const countersChange = (counterValues) => {
    setWealthScores({
      ...wealthScores,
      ...counterValues
    })
  }


  return (
    <div className="wealthForm">
      <FormSlider 
        sliderChange={sliderChange}
        form={wealthSlider}
        stk="wealthSlider"
      />
      <FormCounters 
        countersChange={countersChange}
        form={wealthRepeats}
        stk="wealthCounters"
      />
      <h2 className="invisible">{JSON.stringify(wealthScores)}</h2>
    </div>
  )
}

export default WealthForm
