

import React from 'react'
import Login from '../blocks/Login'
import Register from '../blocks/Register'
import { motion, AnimatePresence } from 'framer-motion'

const LogRegDesktop = ({ logIn, setLogIn, toggleSwitch, setLogReg, logReg }) => {


    const modalVariants = {
        hidden: {
            opacity: 0,
            x: -1000,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        exit: {
            opacity: 0,
            x: 2000,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        }
    }
  return (
    <div className="logreg-desktop">
        <div className="logreg-background">
            <div className="logreg-card"></div>
            <AnimatePresence>
                { logIn ? (
                    <motion.div 
                        className="logreg-card2"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key="login"
                        variants={modalVariants}
                    >
                        <Login 
                            logIn={logIn}
                            setLogIn={setLogIn}
                            toggleSwitch={toggleSwitch}
                            logReg={logReg}
                            setLogReg={setLogReg}
                        />
                    </motion.div>
                ) : (
                    <motion.div 
                        className="logreg-card2"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key="register"
                        variants={modalVariants}
                    >
                        <Register 
                            logIn={logIn}
                            setLogIn={setLogIn}
                            toggleSwitch={toggleSwitch}
                            logReg={logReg}
                            setLogReg={setLogReg}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="logo-card">
                <div className="glitch-solid">
                    <h1>Moonlog</h1>
                    <p>Transcend your Life</p>
                </div>
                {/* <div class="glitch" data-text="Moonlog">Moonlog</div>
                    <div class="glow">Moonlog</div>
                    <p>Transcend your Life</p>
                </div>
                <div class="scanlines"></div> */}
            </div>
        </div>
    </div>
  )
}

export default LogRegDesktop
