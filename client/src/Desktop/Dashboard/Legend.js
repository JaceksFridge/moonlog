

import React from 'react'

const Legend = ({ name, data }) => {

    console.log(name)
    console.log(data)

    let cutData = []
    if (data) {
        const entries = Object.entries(data)
        const sortedEntries = entries.sort((a, b) => b[1] - a[1])
        cutData = sortedEntries.slice(0, 3)
    }



  return (
    <div className="day-full-legend">
        <h3 className="legend-title">
            {name}
        </h3>
        { data && cutData.map(([key, value], index) => (
            <div className={`legend ${name}-${index}`}>
                <div className={`legend-block ${name}-${index}`}></div>
                <p>{key}</p>
                <p>{value}</p>
            </div>
        ))}
  </div>
  )
}

export default Legend
