import React from 'react'
import { nodoChecks, nodoRepeats } from './constants'
import { useLocalStorage } from './useLocalStorage'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'

const NodoForm = () => {


  const [nodoScores, setNodoScores] = useLocalStorage('nodo', {})

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

  return (
    <div className="nodoForm">
      <FormChecks
        checksChange={checksChange}
        form={nodoChecks}  
        stk="nodoChecks"
      />
      <FormCounters 
        countersChange={countersChange}
        form={nodoRepeats}
        stk="nodoCounters"
      />
      <h2 className="invisible">{JSON.stringify(nodoScores)}</h2>
    </div>
  )
}

export default NodoForm
