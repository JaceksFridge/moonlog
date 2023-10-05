

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import {AgGridReact} from 'ag-grid-react'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const LogGrid = () => {


    const gridRef = useRef()

    const [rowData, setRowData] = useState([
        { make: "Ford", model: "focus", price: 40000 },
        { make: "Toyota", model: "Celica", price: 45000 },
        { make: "BMW", model: "4 series", price: 50000 },
    ])

    const [columnDefs, setColumnDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" }
    ])

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])


    const cellClickedListener = useCallback( e => {
        console.log('cellClicked', e)
    })

    const pushMeClicked = useCallback( e => {
        gridRef.current.api.deselectAll()
    })

    const gridOptions = {

        rowClass: "super-dark",
        getRowClass: params => {
            if (params.node.rowIndex % 2 === 0) {
                return 'soft-dark';
            }
        },
    }
   

    useEffect(() => {
        fetch('https://ag-grid.com/example-assets/row-data.json')
            .then(response => response.json())
            .then(rowData => setRowData(rowData))
    }, [])
 

  return (
    <div className="log-grid">
        {/* <button onClick={pushMeClicked}>push me</button> */}
        <AgGridReact 
            {...gridOptions}
            ref={gridRef}
            className="ag-theme-alpine-dark"
            onCellClicked={cellClickedListener}
            defaultColDef={defaultColDef}
            rowSelection="multiple"
            animateRows={true}
            rowData={rowData}
            columnDefs={columnDefs}
        />
    </div>
  )
}

export default LogGrid
