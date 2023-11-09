
import Header from "../blocks/Header"
import HealthForm from "../blocks/HealthForm"
import TopNav from "../blocks/TopNav"
import { useState, useEffect, useRef } from "react"
import AccordionCheckers from "../blocks/AccordionCheckers"

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

    const mockData = {
        "morning run": 20,
        "meditation": 50,
        "take viatmins": 100,
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
    const nodoRef = useRef(null)


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        switch(entry.target.id) {
                            case 'health-section':
                                setActiveTab('health');
                                break;
                            case 'wealth-section':
                                setActiveTab('wealth');
                                break;
                            case 'happiness-section':
                                setActiveTab('happiness');
                                break;
                            case 'nodo-section':
                                setActiveTab('nodo');
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            { threshold: 0.5 }
        )
        observer.observe(healthRef.current)
        observer.observe(wealthRef.current)
        observer.observe(happinessRef.current)
        observer.observe(nodoRef.current)

        return () => {
            observer.disconnect();
        }
    }, [])

    const clickHandler = (tab) => {
        console.log(tab)
    }



  return (
    <div className="goalsettings">
        <div className="top-top">
            <Header />
            <TopNav activeTab={activeTab} onTabClick={clickHandler}/>
        </div>
        <div className="invisible-top"></div>        
        <div ref={healthRef} className="section" id="health-section" >
            <h2 className="section-title">health section</h2>
            <AccordionCheckers settings={mockData}/>
            <AccordionCheckers />
            <AccordionCheckers />
        </div>
        <div ref={wealthRef} className="section" id="wealth-section" >
        <h2 className="section-title">wealth section</h2>
            <AccordionCheckers />
            <AccordionCheckers />
            <AccordionCheckers />
        </div>
        <div ref={happinessRef} className="section" id="happiness-section" >
        <h2 className="section-title">happiness section</h2>
            <AccordionCheckers />
            <AccordionCheckers />
        </div>
        <div ref={nodoRef} className="section" id="nodo-section" >
        <h2 className="section-title">nodo section</h2>
            <AccordionCheckers />
        </div>
        <div className="save-container">
            <div className="info-message">
                <div className="icon">!</div>
                <p className="text">you can only select one checker per page</p>
            </div>
            <div className="save-btn active">
                save
            </div>
        </div>
    </div>
  )
}

export default GoalSettings
