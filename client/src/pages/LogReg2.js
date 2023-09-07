import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Login from '../blocks/Login'
import Register from '../blocks/Register'

const LogReg2 = ({ logReg, setLogReg }) => {


    useEffect(() => {
        if (logReg) {
          document.body.style.overflow = 'hidden';
        } return () => {
          document.body.style.overflow = 'unset';
        }
      }, [logReg]);



    const [ logIn, setLogIn ] = useState(true)

    const toggleSwitch = () => setLogIn(!logIn)

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      }

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
        }
      }

    return (
        <motion.div className="backdrop"
            variants={backdropVariants}
            initial='hidden'
            animate='visible'
        >
            <div className="logreg-switch">
                <div className="switch" data-isOn={logIn} onClick={toggleSwitch}>
                    <div className="top-switch">
                        <div className="top-switch-text">Login</div>
                        <div className="top-switch-text">Register</div>
                    </div>
                <motion.div 
                        className="handle" 
                        layout 
                        transition={spring} 
                        animate={{ 
                            x: logIn ? '0%' : '100%',
                        }} 
                >
                </motion.div>
                </div>
            </div>
            <AnimatePresence>
                { logIn ? (
                    <motion.div
                      className="modal"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={modalVariants}
                      key="login"
                    >
                        <Login setLogReg={setLogReg}/>
                    </motion.div>
                ) : (
                    <motion.div
                      className="modal"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={modalVariants}
                      key="register"
                    >
                        <Register setLogReg={setLogReg}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default LogReg2
