

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ modalData, modal, setModal, btn1Fun, btn2Fun, SVGComponent }) => {

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);
  


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
        <motion.div className="modal" onClick={(e) => e.stopPropagation()}
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
            <h2 className="modal-title">{modalData.title}</h2>
            <p className="modal-text">{modalData.text}</p>
            <div className="modal-buttons">
              <button className="modal-btn1" onClick={btn1Fun} >{modalData.button1}</button>
              <button className="modal-btn2" onClick={btn2Fun} >{modalData.button2}</button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      )}
    </AnimatePresence>
  )
}

export default Modal
