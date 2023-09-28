

import React, { useState } from 'react'
import DashboardSidebarDesktop from './DashboardSidebarDesktop'
import { motion } from 'framer-motion'

const DashboardDesktop = () => {


  const [ sidebar, setSidebar ] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const sidebarVariants = {
    hidden: { x: -250 },
    visible: { x: 0 },
    exit: { x: -250 }
  }

  return (
    <div className="dashboard-desktop">
        <div className="open-button" onClick={toggleSidebar}>
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
        </div>
        { sidebar && (

          <motion.div 
            className="sidebar-container"
            initial="hidden"
            animate={ sidebar ? "visible" : "exit" }
            variants={sidebarVariants}
            transition={{ duration: 0.5 }}
          >
            <DashboardSidebarDesktop />
          </motion.div>
          
        )}
        <div className="main">
          <h1>dashbaord desktop</h1>
        </div>
    </div>
  )
}

export default DashboardDesktop
