import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../blocks/userContext'
import useCurrentDate from '../blocks/useCurrentDate'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'

import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import TopNav1 from '../blocks/TopNav1'
import TopNav2 from '../blocks/TopNav2'

// import { settings } from '../blocks/constants'
import HealthForm from '../blocks/HealthForm'
import WealthForm from '../blocks/WealthForm'
import HappinessForm from '../blocks/HappinessForm'
import NodoForm from '../blocks/NodoForm'

const Forms = () => {

  const server = process.env.REACT_APP_SERVER_URL
  const [settings, setSettings] = useState({})


  // context trying
  const { user, loadingUser } = useContext(UserContext)
 
  useEffect(() => {
    if (user && user.settings) {
      setSettings(user.settings);
      console.log("logging user",user)
    }
  }, [user]);


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


    // console.log("subscores: ", subscores)
    theData['subscores'] = subscores
    // console.log("theData: ", theData)

    theData['nodo'] = theData['nodo'] * -1
    const userId = localStorage.getItem("userId")
  

    // add Sum
    // const sum = Object.values(theData).reduce((a, b) => a + b, 0)
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
      // console.log("Data Submitted:", theData)

      jump("/scores")

      const toTrash = ['health', 'wealth', 'happiness', 'nodo', 
      'healthChecks', 'healthCounters', 'healthSlider', 'happinessSlider', 
      'wealthSlider', 'wealthChecks', 'wealthCounters','happinessChecks', 
      'happinessCounters', 'nodoChecks', 'nodoCounters', 'nodoSlider']
  
      toTrash.forEach((item) => {
        localStorage.removeItem(item)
      })

      localStorage.setItem("lastSubmission" + user.username, currentDate)
      localStorage.setItem("prevSubmission", JSON.stringify(theData))

    } catch (error) {
      console.log("Error:", error)
    }
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
        { settings &&           
        <div className="forms-desktop">
            <div className="top-progress">
              <div className="top-container">
              <div className="top-element health">
                <div className="number">1</div>
                <div className="name">health</div>
              </div>
              <div className="top-element wealth">
                <div className="number">2</div>
                <div className="name">wealth</div>
              </div>
              <div className="top-element happiness">
                <div className="number">3</div>
                <div className="name">happiness</div>
              </div>
              <div className="top-element nodo">
                <div className="number">4</div>
                <div className="name">nodo</div>
              </div>
              <div className="progress-line"></div>
              </div>
          </div>
          <div className="section-container">
            <section id="health-form">
              <h2>Health</h2>
              { settings.health && <HealthForm settings={settings.health.active} /> }
            </section>
            <section id="wealth-form">
              <h2>Wealth</h2>
              { settings.wealth && <HealthForm settings={settings.wealth.active} /> }
            </section>
            <section id="happiness-form">
              <h2>Happiness</h2>
              { settings.happiness && <HealthForm settings={settings.happiness.active} /> }
            </section>
            <section id="nodo-form">
              <h2>Nodo</h2>
              { settings.nodo && <HealthForm settings={settings.nodo.active} /> }
            </section>
          </div>
        </div>
        }
      </>
      )  
    }
    </div>
  )}

export default Forms

