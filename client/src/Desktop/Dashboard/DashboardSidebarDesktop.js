

import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';

const DashboardSidebarDesktop = ({ toggleSidebar, isExpanded }) => {


  const TabItem = ({ icon: Icon, name, link }) => {
    return (
      <div className={`tab chart-btn-${name}`}>
        <Icon />
        { isExpanded && (
          <p>{name}</p>
        )}
      </div>
    )
  }

  return (
    <div className="desktop-sidebar">
      <div className="button-container">
        <div className="close-button" onClick={toggleSidebar}>
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
        </div>
      </div>
      <div className="sidebar-tabs">
        <div className="chart-title">
          <h5>chart tabs</h5>
        </div>
        <div className="chart-tabs">
          <TabItem icon={AdbIcon} name="scores" />
          <TabItem icon={AdbIcon} name="health" />
          <TabItem icon={AdbIcon} name="wealth" />
        </div>
      </div>
    </div>
  )



}

export default DashboardSidebarDesktop
