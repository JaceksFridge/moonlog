

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import DashboardDesktop from '../Desktop/Dashboard/DashboardDesktop'
import Header from '../blocks/Header'
import MainBarchart from '../Desktop/Dashboard/MainBarchart'

import { HealthIconSVG } from '../blocks/svg'
import ScoresModal from '../blocks/ScoresModal'

const Dashboard = () => {

    const server = process.env.REACT_APP_SERVER_URL
    const [data, setData] = useState([])
    const [activeTab, setActiveTab] = useState('year');
    const [mainChartData, setMainChartData] = useState([])
    const [scoresModal, setScoresModal] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)

    // metrics
    const [totalLogs, setTotalLogs] = useState(0)
    const [totalPoints, setTotalPoints] = useState(0)
    const [avgPoints, setAvgPoints] = useState(0)
    const [newATHs, setNewATHs] = useState(0)
    const [logsPerWeek, setLogsPerWeek] = useState(0)
 

    useEffect(() => {
        console.log("Dashboard")

        const fetchData = async () => {
            try {
                const userId = localStorage.getItem("userId")

                const response = await fetch(`${server}/user/scores/${userId}`)
                const data = await response.json()
                setData(data)
                console.log("Data fetched:", data)
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (data && data.length > 0) {
            const yearData = splitData('year')
            setMainChartData(yearData)
            console.log("Data before getMetrics:", data)
            getMetrics(data)
        }
    }, [data])


    const TabClick = (tab) => {
        setActiveTab(tab)
        const newTime = splitData(tab)
        setMainChartData(newTime)
        console.log(mainChartData)
    }

    const isDesktoporLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })


    const splitData = (time) => {
        const now = new Date()

        const newData = data.filter(entry => {
            const entryDate = new Date(entry.date);
            switch(time) {
                case 'week':
                    let startOfWeek = new Date(now);
                    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
                    startOfWeek.setHours(0, 0, 0, 0)
                
                    let endOfWeek = new Date(startOfWeek);
                    endOfWeek.setDate(endOfWeek.getDate() + 6);
                    endOfWeek.setHours(23, 59, 59, 999)
                
                    return entryDate >= startOfWeek && entryDate <= endOfWeek;
                case 'month':
                    const month = entryDate.getMonth() === now.getMonth() && entryDate.getFullYear() === now.getFullYear();
                    return month
                case 'year':
                    const year = entryDate.getFullYear() === now.getFullYear()
                    return year
                default:
                    return true
            }
        }).sort((a, b) => new Date(a.date) - new Date(b.date))
        return newData
    }


    const getMetrics = (data) => {
        console.log("Data inside getMetrics:", data);
        data.sort((a, b) => new Date(a.date) - new Date(b.date));

        if (data) {
            let totalPoints = 0
            let totalLogs = 0
            let avgPoints = 0
            let logsPerWeek = 0
    
            let athCounter = 0
            let maxValue = 0
    
            const startDate = new Date(data[0].date)
            const endDate = new Date(data[data.length - 1].date)
           
    
            data.forEach((entry, index) => {
                totalPoints += entry.sum
                totalLogs += 1
    
                if (entry.sum >= maxValue) {
                    athCounter += 1
                    maxValue = entry.sum
                }
                console.log(index, entry.sum)
            })
    
            const aweek = 1000 * 60 * 60 * 24 * 7
            const duration = endDate - startDate
            const weeks = duration/ aweek
    
            logsPerWeek = weeks > 0 ? parseFloat((totalLogs / weeks).toFixed(1)) : 0
            avgPoints = totalLogs > 0 ? parseFloat((totalPoints / totalLogs).toFixed(1)) : 0
    
            
            const formattedTotalPoints = totalPoints.toLocaleString('de-DE', { minimumFractionDigits: 0 });
    
            setNewATHs(athCounter)
            setLogsPerWeek(logsPerWeek)
            setAvgPoints(avgPoints)
            setTotalLogs(totalLogs)
            setTotalPoints(formattedTotalPoints)
        }

    }

    

    
    const getMaxValue = (data) => {
        let max = 0;
        if (Array.isArray(data)) {
            data.forEach(entry => {
                max = Math.max(max, entry.health, entry.wealth, entry.happiness, entry.nodo);
            });
        }
        return max;
    };
    
    const calculateWidth = (value, data) => {
        const maxValue = getMaxValue(data);
        return (value / maxValue) * 100;
    };

    return (
        <>
        { isDesktoporLaptop  ? (
                <DashboardDesktop data={data} />
            ) : (
                <div className="dashboard">
                    <Header />
                    <ScoresModal modal={scoresModal} setModal={setScoresModal} entry={selectedDay} />
                    <div className="main">
                        <div className="chart-container">
                            <h2 className="container-title">Overview</h2>
                            <div className="topnav">
                                <div 
                                    className={`nav-item week ${activeTab === 'week' ? 'active' : ''}`}
                                    onClick={() => TabClick('week')}
                                >week
                                </div>
                                <div 
                                    className={`nav-item month ${activeTab === 'month' ? 'active' : ''}`}
                                    onClick={() => TabClick('month')}
                                >month
                                </div>
                                <div 
                                    className={`nav-item year ${activeTab === 'year' ? 'active' : ''}`}
                                    onClick={() => TabClick('year')}
                                >year
                                </div>
                            </div>
                            <div className="column-chartbox">
                                <MainBarchart data={mainChartData ? mainChartData : null} />
                            </div>
                        </div>
                        <div className="stats-container">
                            <h2 className="container-title">individual stats</h2>
                            <div className="stats-box">
                                <div className="stat-item">
                                    <p className="stat-name">Logs</p>
                                    <h4 className="stat-value">{`${logsPerWeek ? logsPerWeek : 0} logs/week`}</h4>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-name">New All Time Highs</p>
                                    <h4 className="stat-value">{`${newATHs ? newATHs : 0} times`}</h4>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-name">Avg Points/Log</p>
                                    <h4 className="stat-value">{avgPoints ? avgPoints : 0}</h4>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-name">Total Logs</p>
                                    <h4 className="stat-value">{totalLogs ? totalLogs : 0}</h4>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-name">Total Points</p>
                                    <h4 className="stat-value">{totalPoints ? totalPoints : 0}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="entries-container">
                            <h2 className="container-title">Recent Logs</h2>
                            <div className="entries-box">
                                {data.map((entry) => (
                                    <div 
                                        className="entry-item" 
                                        key={entry._id} 
                                        onClick={() => { setScoresModal(true); setSelectedDay(entry); } }
                                    >
                                        <div className="top-bar">
                                            <p>{entry.date}</p>
                                        </div>
                                        <div className="main">
                                            <h2 className="big-score">{ entry.sum ? entry.sum : 0}</h2>
                                            <div className="row-chart">
                                                <div className="bar health-bar" style={{ width: `${calculateWidth(entry.health, data)}%` }}></div>
                                                <div className="bar wealth-bar" style={{ width: `${calculateWidth(entry.wealth, data)}%` }}></div>
                                                <div className="bar happiness-bar" style={{ width: `${calculateWidth(entry.happiness, data)}%` }}></div>
                                                <div className="bar nodo-bar" style={{ width: `${calculateWidth(entry.nodo, data)}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="bottom-scores">
                                            <div className="health-box">
                                                <p className="health-score">{entry.health}</p>
                                                <div className="icon"></div>
                                            </div>
                                            <div className="wealth-box">
                                                <p className="wealth-score">{entry.wealth}</p>
                                                <div className="icon"></div>
                                            </div>
                                            <div className="happiness-box">
                                                <p className="health-score">{entry.happiness}</p>
                                                <div className="icon"></div>
                                            </div>
                                            <div className="nodo-box">
                                                <p className="health-score">{entry.nodo}</p>
                                                <div className="icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    Dashboard
            </div>
            )
        }
        </>
    )
}

export default Dashboard
