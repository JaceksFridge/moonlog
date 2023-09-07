import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../blocks/Header'

const Scores = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Data fetched successfully")
                const userId = localStorage.getItem("userId")
                const response = await axios.get(`http://localhost:8000/user/scores/${userId}`)
                setData(response.data)
            }
            catch (error) {
                console.log("Error", error)
            }
        }
        fetchData()
    }, [])



  return (
    <div className="scoresPage">pp
        <Header />
        <h1>Scores</h1>
        <div className="scoreboard">
            {data.map((item) => (
                <div className="card" key={item._id}>
                    <h4>{`total sum = ${item.sum}`}</h4>
                    <h4>{`current date = ${item.date}`}</h4>
                    <div className="subSums">
                        <h5>{item.health}</h5>
                        <h5>{item.wealth}</h5>
                        <h5>{item.happiness}</h5>
                        <h5>{item.nodo}</h5>
                        <h5>{item.change}</h5>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Scores
