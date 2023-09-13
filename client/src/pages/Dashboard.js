

import { useState, useEffect } from 'react'

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Dashboard")

        const fetchData = async () => {
            try {
                const userId = localStorage.getItem("userId")

                const response = await fetch(`http://localhost:8000/user/scores/${userId}`)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="dashboard">
            Dashboard
            <div className="day-logs">
                {data.map((obj) => (
                    <div className="object" key={obj._id}>
                        <h3>{obj.date}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
