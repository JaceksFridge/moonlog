

import React, { useState, useEffect, useRef } from 'react';
import DashboardSidebarDesktop from './DashboardSidebarDesktop';
import { motion } from 'framer-motion';

import DayHalfDoughnutChart from './DayHalfDoughnutChart';
import Legend from './Legend';
import DayFullHealth from './DayFullHealth';
import DayFullHappiness from './DayFullHappiness';
import DayFullWealth from './DayFullWealth';

import LogGrid from './LogGrid';

import MainBarchart from './MainBarchart'
import Re2DoughnutChart from './Re2DoughnutChart';


const DashboardDesktop = ({ data }) => {
  const [sidebar, setSidebar] = useState(true)
  const [activeDay, setActiveDay] = useState(null)

  useEffect(() => {
    if (data && data[0]) {
      setActiveDay(data[0])
      // console.log(activeDay)
    }
  }, [data])


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
              <MainBarchart data={data ? data : null}/>
            </div>
            <div className="cell box-logs">
              <LogGrid data={data ? data : null} setActiveDay={setActiveDay}/>
            </div>
          </div>
          <div className="main-placeholder-right" ref={rightPlaceholderRef}></div>
          <div className="main-right" ref={mainRightRef}>
            <div className="inner-content"></div>
          </div>
        </div>
    </div>
  )
};

export default DashboardDesktop;
