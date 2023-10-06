

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import {AgGridReact} from 'ag-grid-react'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const LogGrid = ({ data, setActiveDay }) => {


    console.log("data in loggrid", data)
    const gridRef = useRef()

    const [rowData, setRowData] = useState([
        { date: "1 January 2000", sum: "1000", change: "10%", health: "000", wealth: '000', happiness: "000", nodo: "-000", time: "00:00" },
    ])

    const [columnDefs, setColumnDefs] = useState([
        { field: "date" },
        { field: "sum" },
        { field: "change" },
        { filed: "health" },
        { field: "wealth" },
        { field: "happiness" },
        { field: "nodo" },
        { field: "time" } 
    ])

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])


    const cellClickedListener = useCallback( e => {
        const clickedDate = e.data.date
        console.log('cellClicked', clickedDate)

        const newActiveDay = data.find(day => day.date === clickedDate)
        setActiveDay(newActiveDay)
        console.log("new day set")
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
        // fetch('https://ag-grid.com/example-assets/row-data.json')
        //     .then(response => response.json())
        //     .then(rowData => setRowData(rowData))
        if (data) {
            setRowData(data)
        }
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
