import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'
import HomeDesktop from '../Desktop/HomeDesktop'

import useCurrentDate from '../blocks/useCurrentDate'
import { UserContext } from '../blocks/userContext'

import Card from '../blocks/HomeCard'
import Modal from '../blocks/Modal'
import { repeatModalData, logoutModalData } from '../blocks/constants'
import { RepeatSVG, LogoutSVG } from '../blocks/svg'

import LogReg2 from './LogReg2'


const Home = () => {

  const currentDate = useCurrentDate()

  const [ repeatModal, setRepeatModal ] = useState(false)
  const [ logoutModal, setLogoutModal ] = useState(false)
  const [ logReg, setLogReg ] = useState(false)

  const jump = useNavigate()
  const [userData, setUserData] = useState([])
  const [ isDataLoaded, setIsDataLoaded ] = useState(false)

  const { user } = useContext(UserContext)
  const { logout } = useContext(UserContext)
  const [ checkingUser, setCheckingUser ] = useState(true)


  // Scroll to top on page load
  useEffect(() => {
    if (!logReg) {
      window.scrollTo(0,0)
    }
  }, [logReg]);

  
  // fetching user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        console.log("Data fetched successfully:", token)
        const response = await axios.get("http://localhost:8000/user/home", {
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
    if (!checkingUser && !user) {
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
      await axios.delete('http://localhost:8000/user/delete-score/', {
        headers: { 'Authorization': `Bearer ${token}` },
        data: { date: currentDate, userId: user.userId }
      })
      console.log("Deleted DB entry")
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

  return (
    <div className="homePage">
      { logReg && (
        <LogReg2 setLogReg={setLogReg} logReg={logReg}/>
      )}
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
        btn2fun={() => setLogoutModal(false)}
        SVGComponent={LogoutSVG}
      />
      { isDesktoporLaptop ? (
        <HomeDesktop user={user} userData={userData} setLogoutModal={setLogoutModal}/>
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
          <div className="home-cards">
            <div
              //onClick={isDataLoaded ? checkDate : null}
              onClick={() => jump('/forms')}
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
            <Link to="/scores" className="link">
              <Card 
                title="check scores"
                text="Enter your activities and find out your score"
                id="checkscores"
                icon="/icons/checkcard.svg"
              />
            </Link>
            <button onClick={() => setLogoutModal(true)} className="btn-logout">Logout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Home
