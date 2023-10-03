

import React from 'react'

const Legend = ({ name, data }) => {

    console.log(name)
    console.log(data)

  return (
    <div className="day-full-legend">
        <h3 className="legend-title">
            health
        </h3>
        <div className="legend h-1">
            <div className="legend-block h-1"></div>
            <p>placehold</p>
        </div>
        <div className="legend h-2">
            <div className="legend-block h-2"></div>
            <p>placehold</p>
        </div>
        <div className="legend h-3">
            <div className="legend-block h-3"></div>
            <p>placehold</p>
        </div>
  </div>
  )
}

export default Legend
