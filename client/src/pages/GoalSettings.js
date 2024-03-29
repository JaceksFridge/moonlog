
import Header from "../blocks/Header"
import TopNav from "../blocks/TopNav"
import { useState, useEffect, useRef, useContext, useMemo } from "react"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import AccordionCheckers from "../blocks/AccordionCheckers"
import AccordionCounters from "../blocks/AccordionCounters"
import AccordionSlider from "../blocks/AccordionSlider"
import { UserContext } from "../blocks/userContext"
import { v4 as uuidv4 } from 'uuid';
import { SettingsAccordionCheckersSVG, SettingsAccordionCountersSVG, SettingsAccordionSliderSVG } from "../blocks/svg"
import { useMediaQuery } from 'react-responsive'
import TopNavDesktop from "../Desktop/TopNavDesktop"
import SettingsSection from "../blocks/SettingSection"
import DashboardSidebarDesktop from "../Desktop/Dashboard/DashboardSidebarDesktop"


const GoalSettings = () => {

    const server = process.env.REACT_APP_SERVER_URL;
    const { user, userLoading } = useContext(UserContext);
    const [ settings, setSettings ] = useState({})
    const [ activeTab, setActiveTab ] = useState('health');
    const [ message, setMessage ] = useState('')
    const healthRef = useRef(null);
    const wealthRef = useRef(null);
    const happinessRef = useRef(null);
    const nodoRef = useRef(null);

    const [ isCollapsed, setIsCollapsed ] = useState(true)
    const [ progress, setProgress ] = useState(0)


    const jump = useNavigate()
    const isDesktopOrLaptop = useMediaQuery({ minWidth: "1224px" });

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
                                // console.log('switching secction')
                                setActiveTab('health');
                                break;
                            case 'wealth-section':
                                // console.log('switching secction')
                                setActiveTab('wealth');
                                break;
                            case 'happiness-section':
                                // console.log('switching secction')
                                setActiveTab('happiness');
                                break;
                            case 'nodo-section':
                                // console.log('switching secction')
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
      }, [user])
      useEffect(() => {
        const handleScroll = () => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight
          const currentScroll = window.scrollY
          const progress = (currentScroll / totalScroll) * 100
          setProgress(progress)
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const gradient = (progress) => {
        let color;

        if (progress <= 3) color = 'hsla(0, 0%, 100%, 0)';
        else if (progress <= 10) color = 'hsla(0, 0%, 100%, 0.16)';
        else if (progress <= 20) color = 'hsla(0, 0%, 100%, 0.20)';
        else if (progress <= 30) color = 'hsla(0, 0%, 100%, 0.24)';
        else if (progress <= 40) color = 'hsla(0, 0%, 100%, 0.32)';
        else if (progress <= 50) color = 'hsla(0, 0%, 100%, 0.40)';
        else if (progress <= 60) color = 'hsla(0, 0%, 100%, 0.48)';
        else if (progress <= 70) color = 'hsla(0, 0%, 100%, 0.56)';
        else if (progress <= 80) color = 'hsla(0, 0%, 100%, 0.64)';
        else if (progress <= 90) color = 'hsla(0, 0%, 100%, 0.72)';
        else color = 'hsla(0, 0%, 100%, 0.80)';
        return color;
      }

    const TabClick = (tab) => {
        const tabToRef = {
          health: healthRef,
          wealth: wealthRef,
          happiness: happinessRef,
          nodo: nodoRef,
        }
    
        const ref = tabToRef[tab]
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth'})
        }
        setActiveTab(tab)
    }
    const calculateTotal = (category) => {
        if (!settings || !settings[category]) {
            return 0;
        }
    
        let sum = 0;
        const actives = settings[category].active || {};
    
        // Loop through each property in actives
        Object.entries(actives).forEach(([key, group]) => {
            if (key.startsWith('checkers') || key.startsWith('counters')) {
                // Sum the values of each activity in the group
                Object.values(group).forEach(value => {
                    sum += value ?? 0;
                });
            } else if (key.startsWith('slider')) {
                sum += parseInt(group.weight * group.range, 10);
            }
        });
    
        return sum;
    }
    

    const healthTotal = useMemo(() => calculateTotal(activeTab), [settings, activeTab]);
    const wealthTotal = useMemo(() => calculateTotal(activeTab), [settings, activeTab]);
    const happinessTotal = useMemo(() => calculateTotal(activeTab), [settings, activeTab]);
    const nodoTotal = useMemo(() => calculateTotal(activeTab), [settings, activeTab]);
    


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


    const deleteAccordion = ( category, accordionKey) => {
        setSettings(prevSettings => {
            const updatedCategory = { ...prevSettings[category]}

            if (updatedCategory.active[accordionKey]) {
                delete updatedCategory.active[accordionKey];
            } else if (updatedCategory.inactive[accordionKey]) {
                delete updatedCategory.inactive[accordionKey];
            }
            return {
                ...prevSettings,
                [category]: updatedCategory
            };
        })
    }
    

    const addNewCheckers = () => {
        const newKey = `checkers_${uuidv4()}`
        const newChekers = { activity: 100 }
        updateAccoridonState(newKey, newChekers)
    }
    const addNewCounters = () => {
        const newKey = `counters_${uuidv4()}`
        const newCounters = { activity: 100 }
        updateAccoridonState(newKey, newCounters)
    }
    const addNewSlider = () => {
        const newKey = `slider_${uuidv4()}`
        const newSlider = {}
        updateAccoridonState(newKey, newSlider)
    }
    const updateAccoridonState = (newKey, newAccordion) => {
        setSettings(prevSettings => {
            return {
                ...prevSettings,
                [activeTab]: {
                    ...prevSettings[activeTab],
                    inactive: {
                        ...prevSettings[activeTab].inactive,
                        [newKey]: newAccordion
                    }
                }
            };
        });
    }
    

    const saveSettings = async () => {
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
            console.log("settings sent:", settings)
            console.log("Data received:", data);
            setMessage('data saved successfully!')
            if (!isDesktopOrLaptop) {
                jump('/')
            }
        } catch (error) {
            console.log("Fetch error:", error);
            setMessage('couldn\'t save the data')
        }
    };


    // sidebar stuff
    const handleTabChange = (tab) => {
        jump("/dashboard", { state: { activeTab: tab } });
      }


  return (
    <div className="goalsettings">
        { isDesktopOrLaptop && (
            <>
            <DashboardSidebarDesktop 
                activePageProp='goalsettings' 
                handleTabChange={handleTabChange}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />
            <motion.div             
            className={`placeholder-sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}
            animate={{ width: isCollapsed ? '5.25rem' : '18rem' }}
            ></motion.div>  
            </>
        )}
        { !settings ? (
            <div className="loading">loading...</div>
        ) : (
            <div className="main">
                { !isDesktopOrLaptop ? (
                    <div className="top-top">
                        <Header />
                        <TopNav activeTab={activeTab} TabClick={TabClick} />
                        <div className="scroll-progress">
                            <div 
                                className="progress-bar" 
                                style={{ 
                                    width: `${progress}%`,
                                    background: gradient(progress)
                                }}
                            ></div>
                        </div>
                    </div>
                ) : (
                    <div className={`top-top ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                        <TopNavDesktop activeTab={activeTab} TabClick={TabClick} />
                        <div className="scroll-progress">
                            <div 
                                className="progress-bar" 
                                style={{ 
                                    width: `${progress}%`,
                                    background: gradient(progress)
                                }}
                            ></div>
                        </div>
                    </div>
                )}
                <div className="invisible-top"></div>
                    <div ref={healthRef} className="section" id="health-section" >
                        <div className="section-top">
                            <h2 className="section-title">health settings</h2>
                            <p className="section-number">0 - {healthTotal}</p>
                        </div>
                        <div className="actives-box">
                            <div className="info-box">
                                <div className="circle"></div>
                                <p>active</p>
                            </div>
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
                                            deleteAccordion={deleteAccordion}
                                        />}
                                        {accordionType == "counters" && <AccordionCounters 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={true} 
                                            toggleAccordion={toggleAccordion}
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                            deleteAccordion={deleteAccordion}
                                        />}
                                        {accordionType == "slider" && <AccordionSlider 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={true} 
                                            toggleAccordion={toggleAccordion} 
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                            deleteAccordion={deleteAccordion}
                                        />}
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="inactives-box">
                            <div className="info-box">
                                <div className="circle"></div>
                                <p>inactive</p>
                            </div>
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
                                            deleteAccordion={deleteAccordion}
                                        />}
                                        {accordionType == "counters" && <AccordionCounters 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={false} 
                                            toggleAccordion={toggleAccordion}
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                            deleteAccordion={deleteAccordion}
                                        />}
                                        {accordionType == "slider" && <AccordionSlider 
                                            accordionKey={key} 
                                            category="health" 
                                            settings={value} 
                                            isActive={false} 
                                            toggleAccordion={toggleAccordion} 
                                            addActivity={(newActivity) => addActivity('health', key, newActivity)}
                                            deleteAccordion={deleteAccordion}
                                        />}
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="accordion-container">
                            <div 
                                className="add-checkers"
                                onClick={addNewCheckers}
                            >
                                <div className="add-accordion">
                                    <SettingsAccordionCheckersSVG />
                                </div>
                                <h4 className="add-text">checkers</h4>
                            </div>
                            <div 
                                className="add-slider"
                                onClick={addNewSlider}
                            >
                                <div className="add-accordion">
                                    <SettingsAccordionSliderSVG />
                                </div>
                                <h4 className="add-text">slider</h4>
                            </div>
                            <div 
                                className="add-counters"
                                onClick={addNewCounters}
                            >
                                <div className="add-accordion">
                                    <SettingsAccordionCountersSVG />
                                </div>
                                <h4 className="add-text">counters</h4>
                            </div>

                        </div>
                    </div>
                    <SettingsSection 
                        categoryRef={wealthRef} 
                        sectionId="wealth" 
                        total={wealthTotal} 
                        settings={settings} 
                        toggleAccordion={toggleAccordion}
                        addActivity={addActivity}
                        deleteAccordion={deleteAccordion}
                        addNewCheckers={addNewCheckers}
                        addNewCounters={addNewCounters}
                        addNewSlider={addNewSlider}
                    />
                    <SettingsSection 
                        categoryRef={happinessRef} 
                        sectionId="happiness" 
                        total={happinessTotal} 
                        settings={settings} 
                        toggleAccordion={toggleAccordion}
                        addActivity={addActivity}
                        deleteAccordion={deleteAccordion}
                        addNewCheckers={addNewCheckers}
                        addNewCounters={addNewCounters}
                        addNewSlider={addNewSlider}
                    />
                    <SettingsSection 
                        categoryRef={nodoRef} 
                        sectionId="nodo" 
                        total={nodoTotal} 
                        settings={settings} 
                        toggleAccordion={toggleAccordion}
                        addActivity={addActivity}
                        deleteAccordion={deleteAccordion}
                        addNewCheckers={addNewCheckers}
                        addNewCounters={addNewCounters}
                        addNewSlider={addNewSlider}
                    />
                    <div className="save-container">
                        <div className="info-message">
                            <div className="icon">!</div>
                            <p className="text">there can only be one of each</p>
                        </div>
                        <button 
                            id='work' 
                            type="button" 
                            className="save-btn"
                            onClick={saveSettings}
                            name="Hover"
                        >Save</button>
                        {/* <div 
                            className="save-btn active"
                            onClick={saveSettings}
                        >
                            Save
                        </div> */}
                        <p className="message">{ message ? message : ''}</p>
                    </div>
            </div>
        )}

    </div>
  )
}

export default GoalSettings
