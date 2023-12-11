

import React, { useState, useEffect } from 'react'
import MiniChartHealth from './MiniChartHealth'
import MiniChartWealth from './MiniChartWealth'
import MiniChartHappiness from './MiniChartHappiness'
import MiniChartNodo from './MiniChartNodo'
import { MiniChartChange, MiniChartAvg, MiniChartTop,
    HealthIconSVG, WealthIconSVG, HappinessIconSVG, NodoIconSVG
 } from '../../blocks/svg'

const MiniChart = ({ data, chart, setActiveTab }) => {

    
    const [avg, setAvg] = useState(0)
    const [newHigh, setNewHigh] = useState(0)
    const [lastIncrease, setLastIncrease] = useState(0)
  
    useEffect(() => {
        if (data.length > 0) {
            calcMetrics()
        }
    }, [data])


    const calcMetrics = () => {
        let total = 0
        let entries = 0
        let newH = 0
        let newHighs = 0
    
        data.map((entry) => {
          total += entry[chart]
          entries += 1
          if (entry[chart] > newH) {
            newHighs += 1
          }
          newH = Math.max(newH, entry[chart])
    
        })
        setAvg(parseInt(entries > 0 ? parseInt((total / entries), 10) : 0))
        if ( !data[data.length -2]) {
            setLastIncrease(0)
        } else {
            setLastIncrease(parseFloat((( data[data.length - 1][chart] / data[data.length -2][chart] )  - 1 ) * 100).toFixed(2))
        }   
        setNewHigh(newHighs)
      }
  

    if (data.length < 1) {
        return (
            <div>loading</div>
        )
    }

  return (
    <div className="mini-chart">
        <div className="minichart" onClick={() => setActiveTab(chart)}>
            <div className={`top ${chart ? chart : ''}`} >
                <div className="icon">
                    { chart == "health" && <HealthIconSVG /> }
                    { chart == "wealth" && <WealthIconSVG /> }
                    { chart == "happiness" && <HappinessIconSVG /> }
                    { chart == "nodo" && <NodoIconSVG /> }
                </div>
                <p>{chart}</p>
            </div>
            <div className="middle">
                <div className="points">
                    <h3>{data ? data[data.length -1][chart] : 0}
                    <span>pts.</span></h3>
                </div>
                <div className="chart">
                    { chart == "health" && <MiniChartHealth data={data ? data : null} /> }
                    { chart == "wealth" && <MiniChartWealth data={data ? data : null} /> }
                    { chart == "happiness" && <MiniChartHappiness data={data ? data : null} /> }
                    { chart == "nodo" && <MiniChartNodo data={data ? data : null} /> }
                </div>
            </div>
            <div className="bottom">
                <div className="metric-item">
                    <div className="icon"><MiniChartChange /></div>
                    <p className="value">{`${lastIncrease ? lastIncrease : 0}%`}</p>
                </div>
                <div className="metric-item">
                    <div className="icon"><MiniChartAvg /></div>
                    <p className="value">{`${avg ? avg : 0}`}</p>
                </div>
                <div className="metric-item">
                    <div className="icon"><MiniChartTop /></div>
                    <p className="value">{`${newHigh ? newHigh : 0}`}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiniChart
