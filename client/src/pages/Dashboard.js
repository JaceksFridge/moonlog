

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import DashboardDesktop from '../Desktop/Dashboard/DashboardDesktop'

const Dashboard = () => {

    const server = process.env.REACT_APP_SERVER_URL
    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Dashboard")

        const fetchData = async () => {
            try {
                const userId = localStorage.getItem("userId")

                const response = await fetch(`${server}/user/scores/${userId}`)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        fetchData()
    }, [])

    const isDesktoporLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    return (
        <>
        { isDesktoporLaptop ? (
                <DashboardDesktop data={data}/>
            ) : (
                <div className="dashboard">
                Dashboard
                <div className="day-logs">
                    <div></div>
                    {data.map((obj) => (
                        <div className="object" key={obj._id}>
                            <h3>{obj.date}</h3>
                        </div>
                    ))}
                </div>
            </div>
            )
        }
        </>
    )
}

export default Dashboard
