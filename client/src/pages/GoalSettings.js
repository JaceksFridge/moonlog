
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
                                console.log('switching secction')
                                setActiveTab('health');
                                break;
                            case 'wealth-section':
                                console.log('switching secction')
                                setActiveTab('wealth');
                                break;
                            case 'happiness-section':
                                console.log('switching secction')
                                setActiveTab('happiness');
                                break;
                            case 'nodo-section':
                                console.log('switching secction')
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
      }, [])

    const TabClick = (tab) => {
        const tabToRef = {
          health: healthRef,
          wealth: wealthRef,
          happiness: happinessRef,
          nodo: nodoRef,
        }
    
        const ref = tabToRef[tab]
        if (ref && ref.current) {
          console.log(ref)
          ref.current.scrollIntoView({ behavior: 'smooth'})
        }
        setActiveTab(tab)
    }

    const toggleAccordion = (category, accordionKey, isActive) => {
        setSettings(prevSettings => {
            const newSettings = {...prevSettings};
            const accordionType = accordionKey.split('_')[0];
    
                if (!isActive) {
                    Object.keys(newSettings[category].active).forEach(key => {
                        if (key.startsWith(accordionType)) {
                            newSettings[category].inactive[key] = { ...newSettings[category].active[key] };
                            delete newSettings[category].active[key];
                        }
                    });

                    newSettings[category].active[accordionKey] = {...newSettings[category].inactive[accordionKey]}
                    delete newSettings[category].inactive[accordionKey]
                }
                else {
                    if (newSettings[category].active[accordionKey]) {
                        newSettings[category].inactive[accordionKey] = {...newSettings[category].active[accordionKey]}
                        delete newSettings[category].active[accordionKey]
                    }
                }
            return newSettings
        })
    }


    const addActivity = (category, accordionKey, updatedActivities) => {
        setSettings(prevSettings => {

            const isActive = prevSettings[category].active.hasOwnProperty(accordionKey);
            let newCategorySettings = { ...prevSettings[category] };
    
            if (isActive) {
                newCategorySettings.active[accordionKey] = updatedActivities;
            } else {
                newCategorySettings.inactive[accordionKey] = updatedActivities;
            }
    
            return {
                ...prevSettings,
                [category]: newCategorySettings
            };
        });
    };
    
    
    
    

    const saveSettings = async () => {
        console.log(settings)
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


    console.log("settings object", settings)


  return (
    <div className="goalsettings">
        <div className="top-top">
            <Header />
            <TopNav activeTab={activeTab} onTabClick={TabClick}/>
            <div className="scroll-progress"></div>
        </div>
        { !settings ? (
            <div className="loading">loading...</div>
        ) : (
            <div className="main">
                <div className="invisible-top"></div>
                    <div ref={healthRef} className="section" id="health-section" >
                        <h2 className="section-title">health section</h2>
                        <div className="actives-box">
                            <h5>actives</h5>
                        { settings.health && settings.health.active && 
                            Object.entries(settings.health.active).map(([key, value], index) => {
                                const accordionType = key.split('_')[0];
                                return (
                                    <div key={key} className='active-accordion'>
                                        {accordionType == "checkers" && <AccordionCheckers  
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value}
                                            isActive={true} 
                                            toggleAccordion={toggleAccordion}
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                        />}
                                        {accordionType == "counters" && <AccordionCounters 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={true} 
                                            toggleAccordion={toggleAccordion}
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                        />}
                                        {accordionType == "slider" && <AccordionSlider 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={true} 
                                            toggleAccordion={toggleAccordion} 
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                        />}
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="inactives-box">
                            <h5>inactives</h5>
                            { settings.health && settings.health.inactive && 
                            Object.entries(settings.health.inactive).map(([key, value], index) => {
                                const accordionType = key.split('_')[0];
                                return (
                                    <div key={key} className='inactive-accordion'>
                                        {accordionType == "checkers" && <AccordionCheckers  
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={false} 
                                            toggleAccordion={toggleAccordion}
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                        />}
                                        {accordionType == "counters" && <AccordionCounters 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={false} 
                                            toggleAccordion={toggleAccordion}
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                        />}
                                        {accordionType == "slider" && <AccordionSlider 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={false} 
                                            toggleAccordion={toggleAccordion} 
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                        />}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
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
                        <div 
                            className="save-btn active"
                            onClick={saveSettings}
                        >
                            Save
                        </div>
                    </div>
                
            </div>
        )}

    </div>
  )
}

export default GoalSettings
