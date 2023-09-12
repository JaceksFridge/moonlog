import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../blocks/userContext'
import useCurrentDate from '../blocks/useCurrentDate'
import axios from 'axios'

import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import TopNav1 from '../blocks/TopNav1'
import TopNav2 from '../blocks/TopNav2'

import HealthForm from '../blocks/HealthForm'
import WealthForm from '../blocks/WealthForm'
import HappinessForm from '../blocks/HappinessForm'
import NodoForm from '../blocks/NodoForm'



const Forms = () => {

  const currentDate = useCurrentDate()
  const jump = useNavigate()
  const { user } = useContext(UserContext)

  const forms = {
    health: <HealthForm />,
    wealth: <WealthForm />,
    happiness: <HappinessForm />,
    nodo: <NodoForm />
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
    const healthPoints = Number(localStorage.getItem("health")) || 0
    const wealthPoints = Number(localStorage.getItem("wealth")) || 0
    const happinessPoints = Number(localStorage.getItem("happiness")) || 0
    const nodoPoints = Number(localStorage.getItem("nodo")) || 0
    const negNodoPoints = (nodoPoints * -1)
    const userId = localStorage.getItem("userId")
  
    const theData = {
      health: healthPoints,
      wealth: wealthPoints,
      happiness: happinessPoints,
      nodo: (negNodoPoints)
    }

    // add Sum
    const sum = Object.values(theData).reduce((a, b) => a + b, 0)
    theData.sum = sum

    // add Date
    theData.date = currentDate

    // add Percentage
    const currSum = Number(localStorage.getItem('currSum'))

    if (!isNaN(currSum) && currSum !== 0) {
      const per = ((sum/currSum) - 1) * 100
      theData.change = Number(per.toFixed(2))
    } else {
      console.log("currSum is not a number or it's zero. Can't calculate change.")
      theData.change = 100
    }
    
    console.log('change:', theData.change)
  
    console.log("userId:", userId)
    theData.userId = userId
  
    try {
      const response = await axios.post('http://localhost:8000/api/my-endpoint', theData)
      setData(response.data)
      console.log("Data Submitted:", theData)
      // console.log(data.message)
      jump("/scores")
  
      // configure localstorage

      const toTrash = ['health', 'wealth', 'happiness', 'nodo', 
      'healthChecks', 'healthCounters', 'happinessSlider', 
      'wealthSlider', 'wealthCounters','happinessChecks', 
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
      {currentIndex !== 3 ? (
        <TopNav1 activeTab={activeTab} setActiveTab={setActiveTab} />
      ) :
        <TopNav2 submit={dataToServer} setActiveTab={setActiveTab} />
      }
      {forms[activeTab]}
      <Footer currentIndex={currentIndex} toBack={handleBack} toNext={handleNext} submit={dataToServer}/>
    </div>
  )
}

export default Forms

