import React from 'react'
import { nodoChecks, nodoRepeats } from './constants'
import { useLocalStorage } from './useLocalStorage'

import FormCounters from './FormCounters';
import FormChecks from './FormChecks'

const NodoForm = () => {


  const [nodoScore, setNodoScore] = useLocalStorage('nodo', 0)

  const checksChange = (checksDifference) => {
    setNodoScore(nodoScore => nodoScore + checksDifference)
  }

  const countersChange = (countersDifference) => {
    setNodoScore(nodoScore => nodoScore + countersDifference)
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
      <h2 className="invisible">{nodoScore}</h2>
  </div>
  )
}

export default NodoForm
