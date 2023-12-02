


import React, { useEffect } from 'react'
import PageTop from './PageTop'
import { HealthScoreSVG, LastIncreaseSVG, BrokenRecordSVG } from '../../blocks/svg'
import HappinessLineChart from './HappinessLineChart'


const ChartNodo = ({ data }) => {

  
  useEffect(() => {
    console.log("data is in nodochart", data)
  }, [data])

  return (
    <div className="health-page">
      <PageTop 
        pageName='Nodo'
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
          {data && <HappinessLineChart data={data} />}
        </div>
      </div>
    </div>
  )
}

export default ChartNodo
