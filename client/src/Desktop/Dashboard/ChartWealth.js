

import React, { useState, useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'
import WealthLineChart from './WealthLineChart'


const ChartWealth = ({ data }) => {

  const [avg, setAvg] = useState(0)
  const [newHigh, setNewHigh] = useState(0)
  const [lastIncrease, setLastIncrease] = useState(0)

  useEffect(() => {
    // console.log("data is in healthchart", data)
    calcMetrics()
  }, [data])


  const calcMetrics = () => {
    let total = 0
    let entries = 0
    let newH = 0
    let newHighs = 0

    data.map((entry) => {
      total += entry.wealth
      entries += 1
    
      if (entry.wealth > newH) {
        console.log("new record incoming::: ", entry.wealth)
        newHighs += 1
      }
      newH = Math.max(newH, entry.wealth)
    })

    setAvg(parseInt(entries > 0 ? parseInt((total / entries), 10) : 0))
    setLastIncrease(parseFloat((( data[data.length - 1].wealth / data[data.length -2].wealth )  - 1 ) * 100).toFixed(2))
    setNewHigh(newHighs)
  }

  return (
    <div className="wealth-page">
      <PageTop 
        pageName='Wealth'
        BoxOneIcon={HealthScoreSVG}
        BoxOneTitle='average wealth score'
        BoxOneValue={avg ? avg : 0}

        BoxTwoIcon={LastIncreaseSVG}
        BoxTwoTitle='last increase'
        BoxTwoValue={`${lastIncrease ? lastIncrease : 0}%`}

        BoxThreeIcon={BrokenRecordSVG}
        BoxThreeTitle='broken record'
        BoxThreeValue={`${newHigh ? newHigh : 0} days`}
      />
      <div className="chart-container">
        <div className="chart-box">
          {data && <WealthLineChart data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChartWealth
