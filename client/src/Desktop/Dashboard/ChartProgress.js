

import React, { useState, useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'
import ProgressBarChart from './ProgressBarChart'

const ChartProgress = ({ data }) => {

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
      total += entry.sum
      entries += 1
      if (entry.sum > newH) {
        console.log("new record incoming::: ", entry.sum)
        newHighs += 1
      }
      newH = Math.max(newH, entry.sum)

    })
    setAvg(parseInt(entries > 0 ? parseInt((total / entries), 10) : 0))
    if ( !data[data.length -2]) {
      setLastIncrease(0)
    } else {
      setLastIncrease(parseFloat((( data[data.length - 1].sum / data[data.length -2].sum )  - 1 ) * 100).toFixed(2))
    } 
    setNewHigh(newHighs)
  }

  return (
    <div className="progress-page">
      <PageTop 
        pageName='Progress'
        BoxOneIcon={HealthScoreSVG}
        BoxOneTitle='average score'
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
          {data && <ProgressBarChart data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChartProgress
