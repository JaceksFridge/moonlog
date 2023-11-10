

import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { SidebarArrowSVG, SidebarLogoSVG, SidebarNewLogSVG
 } from '../../blocks/svg';

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
      <div className="inner-sidebar">
        <div className="sidebar-heading">
          <div className="icon">
            <SidebarLogoSVG />
          </div>
          <h2 className="sidebar-title">
            Moonlog
          </h2>
        </div>
        <div className="menu">
          <div className="menu-top">
            Navigation
          </div>
          <div className="menu-item">
            <div className="icon">
              <SidebarNewLogSVG />
            </div>
            <div className="item-name">New Log</div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <SidebarNewLogSVG />
            </div>
            <div className="item-name">Goalsettings</div>
          </div>
        </div>
        <div 
          className="sidebar-btn"
          onClick={toggleSidebar}
        >
          <SidebarArrowSVG />
        </div>
      </div>
    </div>
  )



}

export default DashboardSidebarDesktop
