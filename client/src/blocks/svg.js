import React from 'react';
import { motion } from 'framer-motion';

export const RepeatSVG = ({ variants }) => {
  return (
    <div className="modal-icon">
      <motion.svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M3.32812 13.333V33.333H23.3281" stroke="#B6B6B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M76.668 66.667V46.667H56.668" stroke="#B6B6B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M68.2948 29.9999C66.6042 25.2225 63.731 20.9513 59.9432 17.5847C56.1555 14.218 51.5766 11.8658 46.6338 10.7475C41.6911 9.6291 36.5456 9.78106 31.6775 11.1892C26.8094 12.5973 22.3773 15.2156 18.7948 18.7999L3.32812 33.3333M76.6615 46.6666L61.1948 61.1999C57.6123 64.7842 53.1802 67.4026 48.3121 68.8107C43.444 70.2188 38.2985 70.3708 33.3558 69.2524C28.413 68.134 23.8341 65.7818 20.0463 62.4152C16.2586 59.0486 13.3854 54.7773 11.6948 49.9999" stroke="#B6B6B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};

export const LogoutSVG = ({ variants }) => {
  return (
    <div className="modal-icon">
      <motion.svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M22.5 52.5H12.5C11.1739 52.5 9.90215 51.9732 8.96447 51.0355C8.02678 50.0979 7.5 48.8261 7.5 47.5V12.5C7.5 11.1739 8.02678 9.90215 8.96447 8.96447C9.90215 8.02678 11.1739 7.5 12.5 7.5H22.5" stroke="white" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M40 42.5L52.5 30L40 17.5" stroke="white" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M52.5 30H22.5" stroke="white" strokeWidth="1.99832" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};

export const CheckMarkSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M19.604 32.6279L26.1151 39.139L42.3927 22.8613" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M1.7963 34.5111C1.27209 33.4148 1 32.2151 1 31C1 29.7849 1.27209 28.5852 1.7963 27.4889C2.25207 26.5318 3.0334 25.6137 4.59605 23.7776C5.22111 23.0451 5.53364 22.6805 5.79408 22.2898C6.39327 21.3962 6.80932 20.3926 7.01816 19.3371C7.10932 18.8748 7.14838 18.3962 7.22326 17.4391C7.41534 15.0365 7.50975 13.8352 7.8646 12.8293C8.26986 11.6839 8.92639 10.6438 9.78605 9.78531C10.6457 8.92678 11.6866 8.27161 12.8325 7.86785C13.8352 7.513 15.0365 7.41533 17.4424 7.22651C18.3995 7.14838 18.8748 7.10932 19.3371 7.01816C20.3937 6.80973 21.3984 6.39367 22.2931 5.79408C22.6838 5.53364 23.0484 5.22437 23.7776 4.5993C25.6137 3.03665 26.5318 2.25533 27.4889 1.7963C28.5852 1.27209 29.7849 1 31 1C32.2151 1 33.4148 1.27209 34.5111 1.7963C35.4715 2.25207 36.3895 3.0334 38.2224 4.5993C38.9549 5.22437 39.3195 5.53364 39.7102 5.79408C40.6048 6.39367 41.6096 6.80973 42.6662 7.01816C43.1252 7.10932 43.6038 7.14838 44.5609 7.22651C46.9667 7.41533 48.168 7.513 49.1707 7.86785C50.316 8.27202 51.3563 8.92738 52.2154 9.78588C53.0744 10.6444 53.7305 11.6843 54.1354 12.8293M7.8646 49.1707C8.26952 50.3157 8.92556 51.3556 9.78462 52.2141C10.6437 53.0726 11.684 53.728 12.8293 54.1321C13.832 54.4903 15.0333 54.5847 17.4391 54.7735C18.3962 54.8516 18.8715 54.8907 19.3338 54.9818C20.3904 55.1903 21.3952 55.6063 22.2898 56.2059C22.6805 56.4664 23.0451 56.7756 23.7744 57.4007C25.6105 58.9633 26.5285 59.7447 27.4857 60.2037C28.5819 60.7279 29.7816 61 30.9967 61C32.2119 61 33.4116 60.7279 34.5078 60.2037C35.4682 59.7479 36.3863 58.9666 38.2191 57.4007C38.6924 56.975 39.1891 56.5762 39.7069 56.2059C40.6016 55.6063 41.6063 55.1903 42.6629 54.9818C43.122 54.8907 43.6005 54.8516 44.5576 54.7735C46.9635 54.5847 48.1648 54.487 49.1675 54.1321C50.3127 53.728 51.3531 53.0726 52.2121 52.2141C53.0712 51.3556 53.7272 50.3157 54.1321 49.1707C54.487 48.168 54.5814 46.9635 54.7735 44.5609C54.8484 43.6038 54.8874 43.1252 54.9786 42.6629C55.1869 41.6081 55.6036 40.6022 56.2027 39.7102C56.4631 39.3195 56.7756 38.9549 57.3974 38.2224C58.9601 36.3863 59.7447 35.4682 60.2037 34.5111C60.7279 33.4148 61 32.2151 61 31C61 29.7849 60.7279 28.5852 60.2037 27.4889" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round"/>
      </motion.svg>
    </div>
  );
};


export const CalendarSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="32" height="30" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M1 6.7437C1 4.03626 1 2.68219 1.84145 1.84145C2.68219 1 4.03626 1 6.7437 1H9.61555C12.323 1 13.6771 1 14.5178 1.84145C15.3592 2.68219 15.3592 4.03626 15.3592 6.7437V8.17962C15.3592 10.8871 15.3592 12.2411 14.5178 13.0819C13.6771 13.9233 12.323 13.9233 9.61555 13.9233H6.7437C4.03626 13.9233 2.68219 13.9233 1.84145 13.0819C1 12.2411 1 10.8871 1 8.17962V6.7437Z" stroke="white" strokeOpacity="0.5" strokeWidth="0.8"/>
        <motion.path variants={variants} d="M12.4876 10.334C12.4876 10.5244 12.412 10.707 12.2773 10.8416C12.1427 10.9763 11.9601 11.0519 11.7697 11.0519C11.5792 11.0519 11.3966 10.9763 11.262 10.8416C11.1273 10.707 11.0517 10.5244 11.0517 10.334C11.0517 10.1435 11.1273 9.96092 11.262 9.82628C11.3966 9.69163 11.5792 9.61599 11.7697 9.61599C11.9601 9.61599 12.1427 9.69163 12.2773 9.82628C12.412 9.96092 12.4876 10.1435 12.4876 10.334ZM12.4876 7.4621C12.4876 7.65252 12.412 7.83513 12.2773 7.96978C12.1427 8.10442 11.9601 8.18007 11.7697 8.18007C11.5792 8.18007 11.3966 8.10442 11.262 7.96978C11.1273 7.83513 11.0517 7.65252 11.0517 7.4621C11.0517 7.27169 11.1273 7.08907 11.262 6.95443C11.3966 6.81978 11.5792 6.74414 11.7697 6.74414C11.9601 6.74414 12.1427 6.81978 12.2773 6.95443C12.412 7.08907 12.4876 7.27169 12.4876 7.4621ZM8.89781 10.334C8.89781 10.5244 8.82216 10.707 8.68752 10.8416C8.55288 10.9763 8.37026 11.0519 8.17984 11.0519C7.98943 11.0519 7.80681 10.9763 7.67217 10.8416C7.53752 10.707 7.46188 10.5244 7.46188 10.334C7.46188 10.1435 7.53752 9.96092 7.67217 9.82628C7.80681 9.69163 7.98943 9.61599 8.17984 9.61599C8.37026 9.61599 8.55288 9.69163 8.68752 9.82628C8.82216 9.96092 8.89781 10.1435 8.89781 10.334ZM8.89781 7.4621C8.89781 7.65252 8.82216 7.83513 8.68752 7.96978C8.55288 8.10442 8.37026 8.18007 8.17984 8.18007C7.98943 8.18007 7.80681 8.10442 7.67217 7.96978C7.53752 7.83513 7.46188 7.65252 7.46188 7.4621C7.46188 7.27169 7.53752 7.08907 7.67217 6.95443C7.80681 6.81978 7.98943 6.74414 8.17984 6.74414C8.37026 6.74414 8.55288 6.81978 8.68752 6.95443C8.82216 7.08907 8.89781 7.27169 8.89781 7.4621ZM5.30799 10.334C5.30799 10.5244 5.23235 10.707 5.09771 10.8416C4.96306 10.9763 4.78045 11.0519 4.59003 11.0519C4.39962 11.0519 4.217 10.9763 4.08236 10.8416C3.94771 10.707 3.87207 10.5244 3.87207 10.334C3.87207 10.1435 3.94771 9.96092 4.08236 9.82628C4.217 9.69163 4.39962 9.61599 4.59003 9.61599C4.78045 9.61599 4.96306 9.69163 5.09771 9.82628C5.23235 9.96092 5.30799 10.1435 5.30799 10.334ZM5.30799 7.4621C5.30799 7.65252 5.23235 7.83513 5.09771 7.96978C4.96306 8.10442 4.78045 8.18007 4.59003 8.18007C4.39962 8.18007 4.217 8.10442 4.08236 7.96978C3.94771 7.83513 3.87207 7.65252 3.87207 7.4621C3.87207 7.27169 3.94771 7.08907 4.08236 6.95443C4.217 6.81978 4.39962 6.74414 4.59003 6.74414C4.78045 6.74414 4.96306 6.81978 5.09771 6.95443C5.23235 7.08907 5.30799 7.27169 5.30799 7.4621Z" fill="white" fillOpacity="0.5"/>
      </motion.svg>
    </div>
  );
};


export const TechnologySVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M8 3L10 1M6 14L14 6M10 19L12 17M14.5 17C15.163 17 15.7989 16.7366 16.2678 16.2678C16.7366 15.7989 17 15.163 17 14.5C17 13.837 16.7366 13.2011 16.2678 12.7322C15.7989 12.2634 15.163 12 14.5 12C13.837 12 13.2011 12.2634 12.7322 12.7322C12.2634 13.2011 12 13.837 12 14.5C12 15.163 12.2634 15.7989 12.7322 16.2678C13.2011 16.7366 13.837 17 14.5 17ZM5.5 8C6.16304 8 6.79893 7.73661 7.26777 7.26777C7.73661 6.79893 8 6.16304 8 5.5C8 4.83696 7.73661 4.20107 7.26777 3.73223C6.79893 3.26339 6.16304 3 5.5 3C4.83696 3 4.20107 3.26339 3.73223 3.73223C3.26339 4.20107 3 4.83696 3 5.5C3 6.16304 3.26339 6.79893 3.73223 7.26777C4.20107 7.73661 4.83696 8 5.5 8ZM3.5 19C4.16304 19 4.79893 18.7366 5.26777 18.2678C5.73661 17.7989 6 17.163 6 16.5C6 15.837 5.73661 15.2011 5.26777 14.7322C4.79893 14.2634 4.16304 14 3.5 14C2.83696 14 2.20107 14.2634 1.73223 14.7322C1.26339 15.2011 1 15.837 1 16.5C1 17.163 1.26339 17.7989 1.73223 18.2678C2.20107 18.7366 2.83696 19 3.5 19ZM16.5 6C17.163 6 17.7989 5.73661 18.2678 5.26777C18.7366 4.79893 19 4.16304 19 3.5C19 2.83696 18.7366 2.20107 18.2678 1.73223C17.7989 1.26339 17.163 1 16.5 1C15.837 1 15.2011 1.26339 14.7322 1.73223C14.2634 2.20107 14 2.83696 14 3.5C14 4.16304 14.2634 4.79893 14.7322 5.26777C15.2011 5.73661 15.837 6 16.5 6Z" stroke="white" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};


export const GithubSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M10.3625 16V13.8504C10.3906 13.4932 10.3424 13.1342 10.221 12.7971C10.0996 12.4601 9.90782 12.1527 9.65846 11.8955C12.0103 11.6333 14.482 10.742 14.482 6.65252C14.4818 5.60679 14.0796 4.60117 13.3585 3.84378C13.6999 2.92889 13.6758 1.91763 13.2911 1.02007C13.2911 1.02007 12.4073 0.757919 10.3625 2.12858C8.64582 1.66332 6.83623 1.66332 5.11954 2.12858C3.07478 0.757919 2.19096 1.02007 2.19096 1.02007C1.80626 1.91763 1.78212 2.92889 2.12355 3.84378C1.39712 4.60679 0.994457 5.6215 1.00006 6.67499C1.00006 10.7346 3.47175 11.6259 5.8236 11.918C5.57717 12.1726 5.38713 12.4763 5.26582 12.8092C5.14452 13.1422 5.09468 13.4969 5.11954 13.8504V16" stroke="white" strokeOpacity="0.5" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};


export const BoomerangSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="31" height="56" viewBox="0 0 31 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M3 53L28 28L3 3" stroke="white" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};









