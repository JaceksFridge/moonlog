

import React, { useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'
import WealthAmLines from './WealthAmLines'


const ChartWealth = ({ data }) => {

  
  useEffect(() => {
    console.log("data is in healthchart", data)
  }, [data])

  return (
    <div className="wealth-page">
      <PageTop 
        pageName='Wealth'
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
        <div className="chart-box">
          {data && <WealthAmLines data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChartWealth
