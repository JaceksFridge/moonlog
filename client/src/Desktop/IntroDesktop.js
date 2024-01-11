

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'


const IntroDesktop = ({ bg, title, text, prog, next }) => {

    const jump = useNavigate()
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            jump(next)
        }
    }


    const pageTransition = {
        hidden: {
            opacity: 0,
            // x: '-100vw',
        },
        visible: {
            opacity: 1,
            // x: 0,
        },
        exit: {
            opacity: 0,
            // x: '100vw',
        },
        transition: { type: 'spring', stiffness: 1 }
    };
    

  return (
    <div 
        className="introPage-desktop"
        tabIndex="0"
        onKeyPress={handleKeyPress}
    >
        <div className="intro-bg-desktop">
            <motion.img 
                src={bg} 
                alt="Background" 
                className="background-image"
                variants={pageTransition}
                initial="hidden"
                animate='visible'
            />
            <div className="dark-overlay">
                <div className="intro-nav">
                    <div className="intro-prog">
                        <img src={prog} alt="" />
                    </div>
                    <div 
                        onClick={() => jump("/")}
                        className="intro-skip"
                    >Skip
                    </div>
                </div>
            </div>
        </div>

        <div 
            className="intro-bg-side"
        >
            <motion.h2 
                className="intro-title"
            >{title}</motion.h2>
            <motion.p 
                className="intro-text"
            >{text}</motion.p>
            <Link
                className="intro-button"
                to={next}
            >
                <div className="arrow"></div>
            </Link>
        </div>
    </div>
  )
}

export default IntroDesktop
