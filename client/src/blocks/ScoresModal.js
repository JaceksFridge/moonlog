

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { SettingsInfoSVG, SettingsResetSVG, SettingsBinSVG, SettingsSVG } from './svg'
import { useNavigate } from 'react-router-dom'
import DayHalfDoughnut from '../Desktop/Dashboard/DayHalfDoughnutChart' 



const ScoresModal = ({ modal, setModal, entry }) => {

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
  
      const getOrdinalSuffix = (day) => {
          if (day > 3 && day < 21) return 'th';
          switch (day % 10) {
              case 1:  return "st";
              case 2:  return "nd";
              case 3:  return "rd";
              default: return "th";
          }
      };
      return `${month}, ${day}${getOrdinalSuffix(day)}`;
    };



      const backdropVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            ease: 'easeInOut',
            duration: 0.3,
            when: 'beforeChildren'
          }
        }
      }
    
      const modalVariants = {
        hidden: {
          opacity: 0,
          y: 250
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            damping: 15,
            duration: 0.3
          }
        }
      }
    
      const progressVariants = {
        hidden: { width: "0px" },
        visible: (custom) => ({
          width: `${custom}%`,
          transition: { duration: 1, ease: "easeInOut" } 
        })
      }



  return (
    <AnimatePresence>
      {modal && (
      
      <motion.div className="backdrop" onClick={() => setModal(false)}
        variants={backdropVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        { entry && 
            <motion.div className="scores-modal"
            variants={modalVariants}
            >
            <div className="modal-inner-container">
              <div className="modal-top">
                <div className="title-box">
                  <h2 className="modal-title">{entry && entry.date ? formatDate(entry.date) : 'date'}</h2>
                  <p className="modal-subtitle">+2.79%</p>
                </div>
                <div className="modal-close" onClick={() => setModal(false)}>
                  <img src="/icons/iconmodalclose.png" alt="close" />
                </div>
              </div>
                <div className="chart-container">
                    <DayHalfDoughnut dataDay={entry}/>
                </div>
                <div className="day-subscores">
                  <div className="subscore-grid">
                    <div className="health grid-item">
                      <p className="subscore-name">health</p>
                      <p className="subscore-value">{entry.health ? entry.health : 0 }</p>
                      <div className="subscore-bar-container">
                        <motion.div 
                          className="bar" 
                          variants={progressVariants}
                          initial="initial"
                          animate="visible"
                          custom={entry.health && entry.sum ? (entry.health / entry.sum) * 100 : 0 }
                        >
                        </motion.div>
                      </div>
                    </div>
                    <div className="wealth grid-item">
                      <p className="subscore-name">wealth</p>
                      <p className="subscore-value">{entry.wealth ? entry.wealth : 0 }</p>
                      <div className="subscore-bar-container">
                        <motion.div 
                          className="bar" 
                          variants={progressVariants}
                          initial="initial"
                          animate="visible"
                          custom={entry.health && entry.sum ? (entry.health / entry.sum) * 100 : 0 }
                        >
                        </motion.div>
                      </div>
                    </div>
                    <div className="happiness grid-item">
                      <p className="subscore-name">happiness</p>
                      <p className="subscore-value">{entry.happiness ? entry.happiness : 0 }</p>
                      <div className="subscore-bar-container">
                        <motion.div 
                          className="bar" 
                          variants={progressVariants}
                          initial="initial"
                          animate="visible"
                          custom={entry.health && entry.sum ? (entry.health / entry.sum) * 100 : 0 }
                        >
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </motion.div>
        }
      </motion.div>

      )}
    </AnimatePresence>
  )
}

export default ScoresModal
