

import React from 'react'

const DashboardSidebarDesktop = ({ toggleSidebar }) => {

  return (
    <div className="desktop-sidebar">
        <div className="close-button" onClick={toggleSidebar}>
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
        </div>
        <div className="sidebar-tabs">
          <h5>chart tabs</h5>
          <div className="chart-tabs">

          </div>
        </div>
    </div>
  )
}

export default DashboardSidebarDesktop
