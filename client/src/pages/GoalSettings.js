
import Header from "../blocks/Header"
import HealthForm from "../blocks/HealthForm"
import TopNav from "../blocks/TopNav"
import { useState, useEffect, useRef, useContext } from "react"
import AccordionCheckers from "../blocks/AccordionCheckers"
import AccordionCounters from "../blocks/AccordionCounters"
import AccordionSlider from "../blocks/AccordionSlider"
import { UserContext } from "../blocks/userContext"

const GoalSettings = () => {

    const server = process.env.REACT_APP_SERVER_URL;
    const { user, userLoading } = useContext(UserContext);
    const [ settings, setSettings ] = useState({})
    const [activeTab, setActiveTab] = useState('health');
    const healthRef = useRef(null);
    const wealthRef = useRef(null);
    const happinessRef = useRef(null);
    const nodoRef = useRef(null);

 

    useEffect(() => {
        if (!userLoading && user) {
            setSettings(user.settings)
        }
    }, [user, userLoading]);

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
        );
    
        if (healthRef.current) observer.observe(healthRef.current);
        if (wealthRef.current) observer.observe(wealthRef.current);
        if (happinessRef.current) observer.observe(happinessRef.current);
        if (nodoRef.current) observer.observe(nodoRef.current);
    
        return () => {
            if (healthRef.current) observer.unobserve(healthRef.current);
            if (wealthRef.current) observer.unobserve(wealthRef.current);
            if (happinessRef.current) observer.unobserve(happinessRef.current);
            if (nodoRef.current) observer.unobserve(nodoRef.current);
        };
    }, []);



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

    const clickHandler = (tab) => {
        console.log(tab)
    }


    console.log("settings:", settings)
    if (settings) {
        console.log(settings.health)
    }

    console.log("settings object", settings)



    const mockData = {
        "morning run": 20,
        "meditation": 50,
        "take viatmins": 100,
    }

  return (
    <div className="goalsettings">
        <div className="top-top">
            <Header />
            <TopNav activeTab={activeTab} onTabClick={clickHandler}/>
        </div>
        { userLoading ? (
            <div className="loading">loading...</div>
        ) : (
            <div className="main">
                <div className="invisible-top"></div>
                    <div ref={healthRef} className="section" id="health-section" >
                        <h2 className="section-title">health section</h2>
                        <AccordionCheckers settings={mockData}/>
                        <AccordionCheckers />
                        <AccordionCheckers />
                        
                        <div ref={wealthRef} className="section" id="wealth-section" >
                            <h2 className="section-title">wealth section</h2>
                        </div>
                        <div ref={happinessRef} className="section" id="happiness-section" >
                            <h2 className="section-title">happiness section</h2>
              
                        </div>
                        <div ref={nodoRef} className="section" id="nodo-section" >
                            <h2 className="section-title">nodo section</h2>

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
            </div>
        )}

    </div>
  )
}

export default GoalSettings
