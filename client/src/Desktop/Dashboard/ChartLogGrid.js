

import React, { useState, useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, WealthIconSVG, HappinessIconSVG } from '../../blocks/svg'
import LogGrid from './LogGrid'

const ChartLogGrid = ({ data }) => {

  const [ avgHealth, setAvgHealth ] = useState(null)
  const [ avgWealth, setAvgWealth ] = useState(null)
  const [ avgHappiness, setAvgHappiness ] = useState(null)

  useEffect(() => {
    calcMetrics()
  }, [data])

  const calcMetrics = () => {
    let totalEntries = 0
    let healthSum = 0
    let wealthSum = 0
    let happinessSum = 0

    data.map((entry) => {
      totalEntries += 1
      healthSum += entry.health
      happinessSum += entry.happiness
      wealthSum += entry.wealth
    })

    
    setAvgHealth(parseFloat(healthSum / totalEntries).toFixed(2))
    setAvgWealth(parseFloat(wealthSum / totalEntries).toFixed(2))
    setAvgHappiness(parseFloat(happinessSum / totalEntries).toFixed(2))
  }

  return (
    <div className="health-page">
      <PageTop 
        pageName='Log Entries'
        BoxOneIcon={HealthScoreSVG}
        BoxOneTitle='avg health score'
        BoxOneValue={avgHealth ? avgHealth : 0}

        BoxTwoIcon={WealthIconSVG}
        BoxTwoTitle='avg wealth score'
        BoxTwoValue={avgWealth ? avgWealth : 0}

        BoxThreeIcon={HappinessIconSVG}
        BoxThreeTitle='avg happiness score'
        BoxThreeValue={avgHappiness ? avgHappiness : 0}

        subtitle='Every Log-Entry'
      />
      <div className="chart-container">
        <div className="chart-box">
          {data && <LogGrid data={data ? data : null} setActiveDay={() => null} />}
        </div>
      </div>
    </div>
  )
}

export default ChartLogGrid
