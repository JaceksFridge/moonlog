

import React, { useState, useEffect, useRef } from 'react'
import DashboardSidebarDesktop from './DashboardSidebarDesktop'
import { motion, AnimatePresence } from 'framer-motion'
import ScoreChart from './ScoreChart'

const DashboardDesktop = ({ data }) => {

  console.log(data)
  if (data) {
    for (const [key, value] of Object.entries(data)) {
      console.log("key:", key, "value:", value['sum']);
    }
  }

  const [ sidebar, setSidebar ] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const sidebarVariants = {
    collapsed: { width: 'auto' },
    expanded: { width: '25%' },
  }



  const mainRef = useRef(null)
  const mainRightRef = useRef(null)
  const rightPlaceholderRef = useRef(null)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const mainWidth = mainRef.current.offsetWidth;
      const rightWidth = rightPlaceholderRef.current.offsetWidth;
      mainRightRef.current.style.width = `${rightWidth}px`;
    });

    resizeObserver.observe(rightPlaceholderRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);



  return (
    <div className="dashboard-desktop">
      {/* { !sidebar && (
        <div 
          className="open-button" 
          onClick={toggleSidebar}
        >
          <img src="/icons/sidebarIcon.svg" alt="sidebar" />
      </div>
      )} */}

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

        <div className="main" ref={mainRef}>
          <div className="main-big">
            <div className="main-top">
              <div className="cell top1"></div>
              <div className="cell top2"></div>
              <div className="cell top3"></div>
            </div>
            <div className="cell box-scores">
              <ScoreChart />
            </div>
            <div className="cell box-logs"></div>
          </div>
          <div className="main-placeholder-right" ref={rightPlaceholderRef}></div>
          <div className="main-right" ref={mainRightRef}>
            <div className="cell box-rainbow"></div>
            <div className="cell box-circles"></div>
          </div>
        </div>
    </div>
  )
}

export default DashboardDesktop
