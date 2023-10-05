

import React from 'react'
import {AgGridReact} from 'ag-grid-react'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const LogGrid = () => {

    const rowData = [
        { make: "Ford", model: "focus", price: 40000 },
        { make: "Toyota", model: "Celica", price: 45000 },
        { make: "BMW", model: "4 series", price: 50000 },

    ]
    const columnDefs = [
        { field: "make" },
        { field: "model" },
        { field: "price" }
    ]

 

  return (
    <div className="log-grid">
        <AgGridReact 
            className="ag-theme-alpine"
            style={{ height: 500 }}
            rowData={rowData}
            columnDefs={columnDefs}
        />
    </div>
  )
}

export default LogGrid
