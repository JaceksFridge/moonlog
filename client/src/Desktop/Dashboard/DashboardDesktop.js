

import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import DashboardSidebarDesktop from './DashboardSidebarDesktop';
import ChartHealth from './ChartHealth'
import ChartWealth from './ChartWealth'
import ChartHappiness from './ChartHappiness'
import MainView from './MainView'
import SettingsModal from '../../blocks/SettingsModal'
import Modal from '../../blocks/Modal'
import LogReg2 from '../../pages/LogReg2';
import { UserContext } from '../../blocks/userContext';
import { ModalContext } from '../../blocks/modalContext';
import { repeatModalData, logoutModalData, resetModalData, deleteModalData } from '../../blocks/constants'
import { RepeatSVG, LogoutSVG, SettingsSVG, SettingsInfoSVG, SettingsResetSVG, SettingsBinSVG } from '../../blocks/svg'


const DashboardDesktop = ({ data }) => {

  const location = useLocation();
  const [activeTab, setActiveTab] = useState('main')
  const [userData, setUserData] = useState([])
  const jump = useNavigate()

  const { 
    settingsModal, setSettingsModal,
    logoutModal, setLogoutModal,
    resetModal, setResetModal,
    deleteModal, setDeleteModal,
    logReg, setLogReg
  } = useContext(ModalContext);



  useEffect(() => {
    if (location.state?.activeTab) {
        setActiveTab(location.state.activeTab);
    }
  }, [location]);
  

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleLogout = () => {
    setLogoutModal(true)
  };

  const handleSettings = () => {
    console.log('handling settings')
    setSettingsModal(true)
    console.log(settingsModal)
  }



  return (
    <div className="dashboard-desktop">
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
      />z
      <Modal 
        modalData={resetModalData}
        modal={resetModal}
        setModal={setResetModal} 
        btn1Fun={() => setResetModal(false)}
        btn2Fun={console.log('resetting')}
        SVGComponent={SettingsResetSVG}
      />
      <DashboardSidebarDesktop 
        handleTabChange={handleTabChange} 
        activePageProp="dashboard"
        handleSettings={handleSettings}
        handleLogout={handleLogout}
      />
      <div className="dashboard-main">
        { activeTab === 'main' &&  <MainView /> } 
        { activeTab === 'health' &&  <ChartHealth /> }
        { activeTab === 'wealth' &&  <ChartWealth /> }
        { activeTab === 'happiness' &&  <ChartHappiness /> }
      </div>
    </div>
  );
};

export default DashboardDesktop;
