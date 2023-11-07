
import Header from "../blocks/Header"
import TopNav from "../blocks/TopNav"
import { useState, useRef } from "react"

const GoalSettings = () => {

    const server = process.env.REACT_APP_SERVER_URL
    // dummy settings -> must be replaced
    const settings = {
        health: {
            slider: {},
            checkers: { yoga: 500, run: 500, climb: 550, shower: 500, walk: 500 },
            counters: { workout: 50, stretch: 50, walk: 50, }
        },
        wealth: {
            slider: { title: "hours of work", range: 10, weight: 50, },
            checkers: { meetup: 100, },
            counters: { learning: 50, application: 25, },
        },
        happiness: {
            slider: { title: "how was your day", range: 25, weight: 20, },
            checkers: { sex: 200, event: 100, },
            counters: { meeting: 50, convo: 50, },
        },
        nodo: {
            slider: {},
            checkers: { weed: -200, alcohol: -100, porn: -100, sugar: -100 },
            counters: { caffeine: -50, tvshows: -50, badfood: -50 },
        }
    }

    const saveSettings = async () => {
        console.log("function fired")
        const userId = localStorage.getItem("userId");
        try {
            const response = await fetch(`${server}/user/settings/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings)
            });
            const data = await response.json();
            console.log("Data received:", data);
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };
    

    const [activeTab, setActiveTab] = useState('health')

    const healthRef = useRef(null)
    const wealthRef = useRef(null)
    const happinessRef = useRef(null)
    const nodo = useRef(null)

    const clickHandler = (tab) => {

        setActiveTab(tab)

        switch(tab) {
            case 'health':
                console.log('health')
                healthRef.scrollIntoView({ behaviour: 'smooth' })
                break
        }
    }

  return (
    <div className="goalsettings">
        <Header />
        <TopNav activeTab={activeTab} onTabClick={clickHandler}/>
        goal settings

    </div>
  )
}

export default GoalSettings
