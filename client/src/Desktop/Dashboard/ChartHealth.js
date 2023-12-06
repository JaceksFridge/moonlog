

import React, { useState, useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'
// import HealthRecharts from './HealthRecharts'
import HealthLineChart from './HealthLineChart'

const ChartHealth = ({ data }) => {

  const [avg, setAvg] = useState(0)
  const [newHigh, setNewHigh] = useState(0)
  const [lastIncrease, setLastIncrease] = useState(0)

  useEffect(() => {
    calcMetrics()
  }, [data])


  const calcMetrics = () => {
    let total = 0
    let entries = 0
    let newH = 0
    let newHighs = 0

    data.map((entry) => {
      total += entry.health
      entries += 1
      if (entry.health > newH) {
        console.log("new record incoming::: ", entry.health)
        newHighs += 1
      }
      newH = Math.max(newH, entry.health)

    })
    setAvg(parseInt(entries > 0 ? parseInt((total / entries), 10) : 0))
    setLastIncrease(parseFloat((( data[data.length - 1].health / data[data.length -2].health )  - 1 ) * 100).toFixed(2))
    setNewHigh(newHighs)
  }

  return (
    <div className="health-page">
      <PageTop 
        pageName='Health'
        BoxOneIcon={HealthScoreSVG}
        BoxOneTitle='average health score'
        BoxOneValue={avg ? avg : 0}

        BoxTwoIcon={LastIncreaseSVG}
        BoxTwoTitle='last change'
        BoxTwoValue={`${lastIncrease ? lastIncrease : 0}%`}

        BoxThreeIcon={BrokenRecordSVG}
        BoxThreeTitle='broken record'
        BoxThreeValue={`${newHigh ? newHigh : 0} days`}
      />
      <div className="chart-container">
        <div className="chart-box">
          {data && <HealthLineChart data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChartHealth
