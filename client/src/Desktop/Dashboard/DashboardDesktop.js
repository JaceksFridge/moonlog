

import React, { useState } from 'react'
import DashboardSidebarDesktop from './DashboardSidebarDesktop'
import { motion, AnimatePresence } from 'framer-motion'

const DashboardDesktop = () => {


  const [ sidebar, setSidebar ] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const sidebarVariants = {
    hidden: { width: '0%' },
    visible: { width: '20%' },
  }

  return (
    <div className="dashboard-desktop">
        <div className="open-button" onClick={toggleSidebar}>
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
        </div>
        <AnimatePresence>
          {sidebar && (
            <motion.div
              className="sidebar-container"
              key="sidebar"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              transition={{ duration: 0.5 }}
            >
              <DashboardSidebarDesktop toggleSidebar={toggleSidebar}/>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="main">
          <h1>dashbaord desktop</h1>

          <div className="test-div">test</div>
        </div>
    </div>
  )
}

export default DashboardDesktop
