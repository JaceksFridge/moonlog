

import React, { useState, useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'
import NodoLineChart from './NodoLineChart'

const ChartNodo = ({ data }) => {

  const [avg, setAvg] = useState(0)
  const [newLow, setNewLow] = useState(0)
  const [lastChange, setLastChange] = useState(0)

  useEffect(() => {
    calcMetrics()
  }, [data])


  const calcMetrics = () => {
    let total = 0
    let entries = 0
    let newL = Infinity
    let newLows = 0

    data.map((entry) => {
      total += entry.nodo
      entries += 1
      if (entry.nodo < newL) {
        console.log("new record incoming::: ", entry.nodo)
        newLows += 1
      }
      newL = Math.min(newL, entry.nodo)

    })
    setAvg(parseInt(entries > 0 ? parseInt((total / entries), 10) : 0))
    const previousValue = data[data.length - 2].nodo;
    const currentValue = data[data.length - 1].nodo;
  
    let change;
    if (previousValue < 0) {
      change = ((currentValue - previousValue) / Math.abs(previousValue)) * 100;
    } else {
      change = ((currentValue / previousValue) - 1) * 100;
    }
    setLastChange(parseFloat(change).toFixed(2));
    setNewLow(newLows)
  }

  return (
    <div className="nodo-page">
      <PageTop 
        pageName='Nodo'
        BoxOneIcon={HealthScoreSVG}
        BoxOneTitle='average nodo score'
        BoxOneValue={avg ? avg : 0}

        BoxTwoIcon={LastIncreaseSVG}
        BoxTwoTitle='last change'
        BoxTwoValue={`${lastChange ? lastChange : 0}%`}

        BoxThreeIcon={BrokenRecordSVG}
        BoxThreeTitle='broken record'
        BoxThreeValue={`${newLow ? newLow : 0} days`}
      />
      <div className="chart-container">
        <div className="chart-box">
          {data && <NodoLineChart data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChartNodo
