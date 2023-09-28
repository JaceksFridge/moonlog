

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
            <div className="tab chart-btn-scores"><p>scores</p></div>
            <div className="tab chart-btn-health"><p>health</p></div>
            <div className="tab chart-btn-weatlth"><p>wealth</p></div>
            <div className="tab chart-btn-happiness"><p>happiness</p></div>
            <div className="tab chart-btn-nodo"><p>nodo</p></div>
            <div className="tab chart-btn-logs"><p>logs</p></div>
          </div>
        </div>
    </div>
  )
}

export default DashboardSidebarDesktop
