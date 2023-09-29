

import React, { useState } from 'react'
import DashboardSidebarDesktop from './DashboardSidebarDesktop'
import { motion, AnimatePresence } from 'framer-motion'

const DashboardDesktop = () => {


  const [ sidebar, setSidebar ] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const sidebarVariants = {
    collapsed: { width: '5%' },
    expanded: { width: '25%' },
  }

  return (
    <div className="dashboard-desktop">
      { !sidebar && (
        <div 
          className="open-button" 
          onClick={toggleSidebar}
        >
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
      </div>
      )}

        <motion.div
          className="sidebar-container"
          key="sidebar"
          initial="collapsed"
          animate={ sidebar ? "expanded" : "collapse" }
          variants={sidebarVariants}
          transition={{ duration: 0.5 }}
        >
          <DashboardSidebarDesktop toggleSidebar={toggleSidebar} isExpanded={sidebar}/>
        </motion.div>

        <div className="main">
          <div className="main-big">
            <div className="main-top">
              <div className="cell top1"></div>
              <div className="cell top2"></div>
              <div className="cell top3"></div>
            </div>
            <div className="cell box-scores"></div>
            <div className="cell box-logs"></div>
          </div>
          <div className="main-right">
            <div className="cell box-rainbow"></div>
            <div className="cell box-circles"></div>
          </div>
        </div>
    </div>
  )
}

export default DashboardDesktop
