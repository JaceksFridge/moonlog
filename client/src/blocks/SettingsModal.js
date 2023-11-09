

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const InfoModal = ({ modal, setModal, btn1Fun, btn2Fun, SVGComponent }) => {



    const closeModal = () => {
        setModal(false)
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
      
      <motion.div className="backdrop" onClick={closeModal}
        variants={backdropVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <motion.div className="settings-modal" onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
        >
          <div className="modal-inner-container">
            <div className="modal-close" onClick={closeModal}>
              <img src="/icons/iconmodalclose.png" alt="close" />
            </div>
            <SVGComponent 
              variants={pathVariantsOG}
              initial='hidden'
              animate='visible'
            />
            <h2 className="modal-title">Settings</h2>
            <div className="user-box">
              <div className="user-pic">D</div>
              <div className="user-info">
                <div className="user-name">Derick</div>
                <div className="user-mail">derickrose@gmail.com</div>
              </div>
            </div>
            <button className="modal-btn">
              logout
            </button>
          </div>
        </motion.div>
      </motion.div>

      )}
    </AnimatePresence>
  )
}

export default InfoModal
