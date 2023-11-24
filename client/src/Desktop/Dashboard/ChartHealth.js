

import React from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'

const ChartHealth = () => {
  return (
    <div className="health-page">
      <PageTop 
        pageName='Health'
        BoxOneIcon={HealthScoreSVG}
        BoxOneTitle='average health score'
        BoxOneValue={440}

        BoxTwoIcon={LastIncreaseSVG}
        BoxTwoTitle='last increase'
        BoxTwoValue='2.45%'

        BoxThreeIcon={BrokenRecordSVG}
        BoxThreeTitle='broken record'
        BoxThreeValue='7 days'
      />
      <div className="chart-container">
        <div className="chart-box"></div>
      </div>
    </div>
  )
}

export default ChartHealth
