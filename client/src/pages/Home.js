

import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'
import HomeDesktop from '../Desktop/HomeDesktop'

import useCurrentDate from '../blocks/useCurrentDate'
import { UserContext } from '../blocks/userContext'

import Card from '../blocks/HomeCard'
import Modal from '../blocks/Modal'
import SettingsModal from "../blocks/SettingsModal"
import { repeatModalData, logoutModalData, resetModalData, deleteModalData } from '../blocks/constants'
import { RepeatSVG, LogoutSVG, SettingsSVG, SettingsInfoSVG, SettingsResetSVG, SettingsBinSVG } from '../blocks/svg'

import LogReg2 from './LogReg2'


const Home = () => {

  const server = process.env.REACT_APP_SERVER_URL
  // console.log("server is here: ", server)
  const currentDate = useCurrentDate()

  const [ repeatModal, setRepeatModal ] = useState(false)
  const [ logoutModal, setLogoutModal ] = useState(false)
  const [ settingsModal, setSettingsModal ] = useState(false)
  const [ resetModal, setResetModal ] = useState(false)
  const [ deleteModal, setDeleteModal ] = useState(false)
  const [ logReg, setLogReg ] = useState(false)

  const jump = useNavigate()
  const [userData, setUserData] = useState([])
  const [ isDataLoaded, setIsDataLoaded ] = useState(false)

  const { user } = useContext(UserContext)
  const { logout } = useContext(UserContext)
  const [ checkingUser, setCheckingUser ] = useState(true)


  console.log("LogRegDesktop::: ",typeof setLogReg)


  // Scroll to top on page load
  useEffect(() => {
    console.log("LogReg Changin")
    if (!logReg) {
      window.scrollTo(0,0)
    }
  }, [logReg]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await axios.get(`${server}/user/home`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        setUserData(response.data)
        setIsDataLoaded(true)
      } catch (error) {
        console.log("Error", error)
        setIsDataLoaded(true)
      } finally {
        setCheckingUser(false)
      }
    }
    if (user) {
      fetchData()
    }
  }, [user])

  useEffect(() => {
    if (!user) {
      setCheckingUser(false);
    }
  }, [user]);
  useEffect(() => {
    // console.log("checkingUSER: ", checkingUser)
    // console.log("user: ", user)
    if (!user && !checkingUser) {
      setLogReg(true)
    }
  },[checkingUser, user])

  localStorage.setItem('currSum', userData?.sum)



  // Cheking if open Modal or allow Entry
  const checkDate = (event) => {
    const lastDate = localStorage.getItem("lastSubmission" + user.username)

    if (lastDate === currentDate) {
      setRepeatModal(true)

    } else {
      jump("/forms")
    }
  }


  // Overwriting old Entry
  const newEntry = async () => {
    const token = localStorage.getItem('token')
    
    try {
      await axios.delete(`${server}/user/delete-score/`, {
        headers: { 'Authorization': `Bearer ${token}` },
        data: { date: currentDate, userId: user.userId }
      })
      // console.log("Deleted DB entry")
    } catch (error) {
      console.log("Error deleting entry:", error)
    }

    localStorage.removeItem('lastSubmission' + user.username)
    setRepeatModal(false)
    jump('./forms')
  }

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })



  const cardsJSX = (
    <div className="home-cards">
      <div
        onClick={isDataLoaded ? checkDate : null}
        // onClick={() => jump('/forms')}
        href="/forms" 
        className="link"
      >
        <Card 
          title="new log"
          text="Enter your activities and find out your score"
          id="newlog"
          icon="/icons/newcard.svg"
        />
      </div>
      <Link to="/about" className="link">
        <Card 
          title="About"
          text="Enter your activities and find out your score"
          id="checkscores"
          icon="/icons/checkcard.svg"
        />
      </Link>
      <Link to="/dashboard" className="link">
        <Card 
          title="dashboard"
          text="Enter your activities and find out your score"
          id="dashboard"
          icon="/icons/dashboard.svg"
        />
      </Link>
      <Link to="/goalsettings" className="link">
        <Card 
          title="goalsettings"
          text="Enter your activities and find out your score"
          id="goalsettings"
          icon="/icons/checkcard.svg"
        />
      </Link>
      <div className="mini-cards">
        <button onClick={() => setLogoutModal(true)} className="btn-logout">Logout</button>
        <button onClick={() => setLogoutModal(true)} className="btn-logout">Settings</button>
      </div>
    </div>
  )

  return (
    <div className="homePage">
      { logReg && (
        <LogReg2 setLogReg={setLogReg} logReg={logReg}/>
      )}
      <SettingsModal 
        modal={settingsModal}
        setModal={setSettingsModal} 
        btnLogout={setLogoutModal}
        btnReset={setResetModal}
        btnDelete={setDeleteModal}
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
      <Modal 
        modalData={repeatModalData}
        modal={repeatModal}
        setModal={setRepeatModal} 
        btn1Fun={() => setRepeatModal(false)}
        btn2Fun={newEntry}
        SVGComponent={RepeatSVG}
      />
      <Modal
        modalData={logoutModalData}
        modal={logoutModal}
        setModal={setLogoutModal}
        btn1Fun={() => {setLogoutModal(false); setLogReg(true); localStorage.clear(); setUserData([]);}}
        btn2Fun={() => setLogoutModal(false)}
        SVGComponent={LogoutSVG}
      />
      { isDesktoporLaptop ? (
        <HomeDesktop user={user} userData={userData} setLogoutModal={setLogoutModal} cards={cardsJSX} />
      ) : (
        <>
          <div className="home-container">
            <video autoPlay muted loop>
              <source src="/videos/moonanim.mp4" type="video/mp4" />
            </video>
            <h1 className="home-welcome">Welcome <span>{user ? user.username : "Guest"}</span></h1>
            <div className="home-score">
              <div className="home-score-container">
                <div className="big-score">
                  <h2 className="last-score">{userData && userData.sum ? userData.sum : "0000"}</h2>
                  <h6 className="score-change">{userData && userData.change 
                    ? (userData.change > 0 ? '+' : '') + userData.change : '0'}%
                  </h6>
                </div>          
              <h6 className="score-descrip">points collected yesterday</h6>
              </div>
            </div>
          </div>
          {cardsJSX}
        </>
      )}
    </div>
  )
}

export default Home
