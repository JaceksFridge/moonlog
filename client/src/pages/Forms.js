import React, { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../blocks/userContext'
import { ModalContext } from '../blocks/modalContext';
import SettingsModal from '../blocks/SettingsModal'
import Modal from '../blocks/Modal'
import { repeatModalData, logoutModalData, resetModalData, deleteModalData } from '../blocks/constants'
import { RepeatSVG, LogoutSVG, SettingsSVG, SettingsInfoSVG, SettingsResetSVG, SettingsBinSVG } from '../blocks/svg'
import useCurrentDate from '../blocks/useCurrentDate'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'

import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import TopNav1 from '../blocks/TopNav1'
import TopNav2 from '../blocks/TopNav2'
import TopNavDesktop from '../Desktop/TopNavDesktop'
import DashboardSidebarDesktop from '../Desktop/Dashboard/DashboardSidebarDesktop'
import { motion } from 'framer-motion'

// import { settings } from '../blocks/constants'
import HealthForm from '../blocks/HealthForm'
import WealthForm from '../blocks/WealthForm'
import HappinessForm from '../blocks/HappinessForm'
import NodoForm from '../blocks/NodoForm'

const Forms = () => {

  const server = process.env.REACT_APP_SERVER_URL
  const [settings, setSettings] = useState({})
  const [userData, setUserData] = useState([])
  const [activedTab, setActivedTab] = useState('forms');
  const healthRef = useRef(null);
  const wealthRef = useRef(null);
  const happinessRef = useRef(null);
  const nodoRef = useRef(null);

  // sidebar
  const [isCollapsed, setIsCollapsed] = useState(true);

  // context trying
  const { user, loadingUser } = useContext(UserContext)

  const { 
    settingsModal, setSettingsModal,
    logoutModal, setLogoutModal,
    resetModal, setResetModal,
    deleteModal, setDeleteModal,
    logReg, setLogReg
  } = useContext(ModalContext)


 
  // checking if settings loaded
  useEffect(() => {
    if (user && user.settings) {
      setSettings(user.settings);
      console.log("logging user",user)
    }
  }, [user]);

  // observer for scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch(entry.target.id) {
                        case 'health-form':
                            setActiveTab('health');
                            break;
                        case 'wealth-form':
                            setActiveTab('wealth');
                            break;
                        case 'happiness-form':
                            setActiveTab('happiness');
                            break;
                        case 'nodo-form':
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
    setActivedTab(tab)
  }




  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })


  const currentDate = useCurrentDate()
  const currentTime = new Date().toLocaleTimeString()
  const jump = useNavigate()

  const forms = {
    health: settings.health ? <HealthForm settings={settings.health.active} /> : null,
    wealth: settings.wealth ? <WealthForm settings={settings.wealth.active} /> : null,
    happiness: settings.happiness ? <HappinessForm settings={settings.happiness.active} /> : null,
    nodo: settings.nodo ? <NodoForm settings={settings.nodo.active} /> : null
  }
  
  const formOrder = ['health', 'wealth', 'happiness', 'nodo']
  const [activeTab, setActiveTab] = useState(formOrder[0])
  
  const currentIndex = formOrder.indexOf(activeTab)


  const handleBack = () => {
    if (currentIndex > 0) {
      setActiveTab(formOrder[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < formOrder.length - 1) {
      setActiveTab(formOrder[currentIndex + 1])
    }
  }

  const [data, setData] = useState("")


  const dataToServer = async () => {

    const categories = ['health', 'wealth', 'happiness', 'nodo']
    const subscores = {}
    let theData = {}
    let totalsum = 0

    categories.forEach((category) => {
      const score = JSON.parse(localStorage.getItem(category)) || 0
      if (Object.keys(score).length > 0) {

        subscores[category] = score

        let sum = 0
        if (typeof score === 'object') {
          Object.values(score).forEach((value) => {
            sum += value
          })
        }
  
        theData[category] = sum
        totalsum += sum
      }
      })



    theData['subscores'] = subscores
    theData['nodo'] = theData['nodo'] * -1
    const userId = localStorage.getItem("userId")
  
    theData['sum'] = totalsum

    // add Date
    theData.date = currentDate

    // add Time
    theData['time'] = currentTime

    // add Percentage
    const currSum = Number(localStorage.getItem('currSum'))

    if (!isNaN(currSum) && currSum !== 0) {
      const per = ((totalsum/currSum) - 1) * 100
      theData.change = Number(per.toFixed(2))
    } else {
      console.log("currSum is not a number or it's zero. Can't calculate change.")
      theData.change = 100
    }
    
    theData.userId = userId
  
    try {
      const response = await axios.post(`${server}/api/my-endpoint`, theData)
      setData(response.data)
      console.log("Data Submitted:", theData)

      jump("/scores")

      const toTrash = ['health', 'wealth', 'happiness', 'nodo', 
      'healthCheckers', 'healthCounters', 'healthSlider', 'happinessSlider', 
      'wealthSlider', 'wealthCheckers', 'wealthCounters','happinessCheckers', 
      'happinessCounters', 'nodoCheckers', 'nodoCounters', 'nodoSlider']

      console.log("localStorage before clear:", localStorage);
      toTrash.forEach((item) => {
        localStorage.removeItem(item)
      })
      console.log("localstorage after clear", localStorage)

      localStorage.setItem("lastSubmission" + user.username, currentDate)
      localStorage.setItem("prevSubmission", JSON.stringify(theData))

    } catch (error) {
      console.log("Error:", error)
    }
  }

  const handleTabChange = (tab) => {
    jump("/dashboard", { state: { activeTab: tab } });
  }

  return (
    <div className="Forms">
    { !isDesktoporLaptop ? (
      <>
        <Header />
        { loadingUser ? (
          <div>Loading...</div>
        ) : (
          <>
            {currentIndex !== 3 ? (
              <TopNav1 activeTab={activeTab} setActiveTab={setActiveTab} />
            ) : (
              <TopNav2 submit={dataToServer} setActiveTab={setActiveTab} />
            )}
            {forms[activeTab]}
            <Footer currentIndex={currentIndex} toBack={handleBack} toNext={handleNext} submit={dataToServer}/>
          </>
        )}
      </>
      ) : (
      <>
        <SettingsModal 
          modal={settingsModal}
          setModal={setSettingsModal} 
          btnLogout={setLogoutModal}
          btnReset={setResetModal}
          btnDelete={setDeleteModal}
        />
        <Modal 
            modalData={logoutModalData}
            modal={logoutModal}
            setModal={setLogoutModal}
            btn1Fun={() => {setLogoutModal(false); setLogReg(true); localStorage.clear(); setUserData([]); jump('/')}}
            btn2Fun={() => setLogoutModal(false)}
            SVGComponent={LogoutSVG}
        />
        <Modal 
          modalData={deleteModalData}
          modal={deleteModal}
          setModal={setDeleteModal} 
          btn1Fun={() => setDeleteModal(false)}
          btn2Fun={console.log("deleting")}
          SVGComponent={SettingsBinSVG}
        />
        <Modal 
          modalData={resetModalData}
          modal={resetModal}
          setModal={setResetModal} 
          btn1Fun={() => setResetModal(false)}
          btn2Fun={console.log('resetting')}
          SVGComponent={SettingsResetSVG}
        />
        <DashboardSidebarDesktop 
          activePageProp='forms' 
          handleTabChange={handleTabChange}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <motion.div             
          className={`placeholder-sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}
          animate={{ width: isCollapsed ? '5rem' : '18rem' }}
        ></motion.div>  
        { settings &&     
        <div className="forms-desktop">
          <div className="top-top">
            <TopNavDesktop activeTab={activeTab} TabClick={TabClick}/>
          </div>
          <div className="topnav-placeholder"></div>
          <div className="section-container">
            <section id="health-form" ref={healthRef} >
              <h2>Health</h2>
              { settings.health && <HealthForm settings={settings.health.active} /> }
            </section>
            <section id="wealth-form" ref={wealthRef} >
              <h2>Wealth</h2>
              { settings.wealth && <WealthForm settings={settings.wealth.active} /> }
            </section>
            <section id="happiness-form" ref={happinessRef} >
              <h2>Happiness</h2>
              { settings.happiness && <HappinessForm settings={settings.happiness.active} /> }
            </section>
            <section id="nodo-form" ref={nodoRef} >
              <h2>Nodo</h2>
              { settings.nodo && <NodoForm settings={settings.nodo.active} /> }
            </section>
          </div>
          <div className="button-container">
            <button 
              className="submit-btn"
              onClick={dataToServer}
            >
              Save
            </button>
          </div>
        </div>
        }
      </>
      )  
    }
    </div>
  )}

export default Forms

