

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SettingsInfoSVG, SettingsResetSVG, SettingsBinSVG, SettingsSVG } from './svg'
import { useNavigate } from 'react-router-dom'
import DayHalfDoughnut from '../Desktop/Dashboard/DayHalfDoughnutChart' 

const ScoresModal = ({ modal, setModal, entry }) => {

    const jump = useNavigate()
    const [healthPercentage, setHealthPercentage] = useState(0);
    const [wealthPercentage, setWealthPercentage] = useState(0);
    const [happinessPercentage, setHappinessPercentage] = useState(0);
    const [nodoPercentage, setNodoPercentage] = useState(0);

    useEffect(() => {
        if (entry) {
            const total = entry.sum;
            setHealthPercentage(calculatePercentage(entry.health, total));
            setWealthPercentage(calculatePercentage(entry.wealth, total));
            setHappinessPercentage(calculatePercentage(entry.happiness, total));
            setNodoPercentage(calculatePercentage(entry.nodo, total));
        }
    }, [entry]);


    const calculatePercentage = (value, total) => {
        return total > 0 ? (value / total) * 100 : 0;
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
    
      const pathVariantsOG = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 1.5,
            ease: 'easeInOut'
          }
        }
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
                <div className="modal-close" onClick={() => setModal(false)}>
                <img src="/icons/iconmodalclose.png" alt="close" />
                </div>
                <SettingsSVG
                variants={pathVariantsOG}
                initial='hidden'
                animate='visible'
                />
                <h2 className="modal-title">{entry && entry.date ? entry.date : 'date'}</h2>
                <div className="chart-container">
                    <DayHalfDoughnut dataDay={entry}/>
                </div>
                <div className="bars-container">
                    <div className="box health-box">
                        <div className="title">Health</div>
                        <div className="value">{entry.health ? entry.health : 0}</div>
                        <div className="bar-container">
                            <div className="bar" style={{ width: `${healthPercentage}%`, backgroundColor: 'green' }}></div>
                        </div>
                    </div>
                    <div className="box wealth-box">
                        <div className="title">Wealth</div>
                        <div className="value">{entry.wealth ? entry.wealth : 0}</div>
                        <div className="bar-container">
                            <div className="bar" style={{ width: `${wealthPercentage}%`, backgroundColor: 'blue' }}></div>
                        </div>
                    </div>
                    <div className="box happiness-box">
                        <div className="title">Happiness</div>
                        <div className="value">{entry.happiness ? entry.happiness : 0}</div>
                        <div className="bar-container">
                            <div className="bar" style={{ width: `${happinessPercentage}%`, backgroundColor: 'yellow' }}></div>
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
