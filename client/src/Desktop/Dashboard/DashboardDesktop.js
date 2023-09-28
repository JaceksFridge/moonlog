

import React, { useState } from 'react'
import DashboardSidebarDesktop from './DashboardSidebarDesktop'


const DashboardDesktop = () => {


  const [ sidebar, setSidebar ] = useState(false)

  return (
    <div className="dashboard-desktop">
        <div className="open-button">
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
        </div>
        { sidebar && (
          <DashboardSidebarDesktop />
        )}
        <div className="main">
          <h1>dashbaord desktop</h1>
        </div>
    </div>
  )
}

export default DashboardDesktop
