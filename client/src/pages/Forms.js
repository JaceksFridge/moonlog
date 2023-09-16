import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../blocks/userContext'
import useCurrentDate from '../blocks/useCurrentDate'
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSettings = async () => {
      setLoading(true)

      const userId = localStorage.getItem('userId')

      try {
        const response = await fetch(`${server}/user/settings/${userId}`)

        if (response.status === 200) {
          const data = await response.json()
          setSettings(data)
        } else {
          console.log('Failed to fetch settings');
        }

      } catch (error) {
        console.log('Fetch Error', error)
      } finally {
      setLoading(false)
      }
    }
    getSettings()
  }, [])

  // useEffect(() => {
  //   console.log('Updated Settings: ', settings);
  // }, [settings]);

  const currentDate = useCurrentDate()
  const currentTime = new Date().toLocaleTimeString()
  const jump = useNavigate()
  const { user } = useContext(UserContext)

  const forms = {
    health: <HealthForm settings={settings.health} />,
    wealth: <WealthForm settings={settings.wealth} />,
    happiness: <HappinessForm settings={settings.happiness} />,
    nodo: <NodoForm settings={settings.nodo} />
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
      'healthChecks', 'healthCounters', 'happinessSlider', 
      'wealthSlider', 'wealthChecks', 'wealthCounters','happinessChecks', 
      'happinessCounters', 'nodoChecks', 'nodoCounters']
  
      toTrash.forEach((item) => {
        localStorage.removeItem(item)
      })

      localStorage.setItem("lastSubmission" + user.username, currentDate)
  
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div className="Forms">
      <Header />
      {loading ? (
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
    </div>
  )  
}

export default Forms

