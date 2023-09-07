import React from 'react'
import { motion } from 'framer-motion'

export const RepeatSVG = ({ variants }) => {
  return (
    <div className="modal-icon">
        <motion.svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={variants} d="M3.32812 13.333V33.333H23.3281" stroke="#B6B6B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <motion.path variants={variants} d="M76.668 66.667V46.667H56.668" stroke="#B6B6B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <motion.path variants={variants} d="M68.2948 29.9999C66.6042 25.2225 63.731 20.9513 59.9432 17.5847C56.1555 14.218 51.5766 11.8658 46.6338 10.7475C41.6911 9.6291 36.5456 9.78106 31.6775 11.1892C26.8094 12.5973 22.3773 15.2156 18.7948 18.7999L3.32812 33.3333M76.6615 46.6666L61.1948 61.1999C57.6123 64.7842 53.1802 67.4026 48.3121 68.8107C43.444 70.2188 38.2985 70.3708 33.3558 69.2524C28.413 68.134 23.8341 65.7818 20.0463 62.4152C16.2586 59.0486 13.3854 54.7773 11.6948 49.9999" stroke="#B6B6B6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </motion.svg>
    </div>
  )
}



export const LogoutSVG = ({ variants }) => {
  return (
    <div className="modal-icon">
      <motion.svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M22.5 52.5H12.5C11.1739 52.5 9.90215 51.9732 8.96447 51.0355C8.02678 50.0979 7.5 48.8261 7.5 47.5V12.5C7.5 11.1739 8.02678 9.90215 8.96447 8.96447C9.90215 8.02678 11.1739 7.5 12.5 7.5H22.5" stroke="white" stroke-width="1.99832" stroke-linecap="round" stroke-linejoin="round"/>
        <motion.path variants={variants} d="M40 42.5L52.5 30L40 17.5" stroke="white" stroke-width="1.99832" stroke-linecap="round" stroke-linejoin="round"/>
        <motion.path variants={variants} d="M52.5 30H22.5" stroke="white" stroke-width="1.99832" stroke-linecap="round" stroke-linejoin="round"/>
      </motion.svg>

    </div>
  )
}



