

import React from 'react'

const DashboardSidebarDesktop = ({ toggleSidebar }) => {

  return (
    <div className="desktop-sidebar">
        sidebar
        <div className="close-button" onClick={toggleSidebar}>
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
        </div>
    </div>
  )
}

export default DashboardSidebarDesktop
