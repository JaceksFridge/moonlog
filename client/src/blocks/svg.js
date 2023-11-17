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


export const SettingsSVG = ({ variants }) => {
  return (
    <div className="modal-icon">
      <motion.svg width="64" height="67" viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M31.6401 43.25C37.0249 43.25 41.3901 38.8848 41.3901 33.5C41.3901 28.1152 37.0249 23.75 31.6401 23.75C26.2554 23.75 21.8901 28.1152 21.8901 33.5C21.8901 38.8848 26.2554 43.25 31.6401 43.25Z" stroke="#B6B6B6" strokeWidth="2"/>
        <motion.path variants={variants} d="M4.53985 29.08C6.0771 30.042 7.0651 31.6865 7.0651 33.5C7.0651 35.3135 6.0771 36.958 4.53985 37.92C3.4966 38.5797 2.8206 39.103 2.34285 39.727C1.82315 40.4044 1.44199 41.1776 1.22117 42.0023C1.00034 42.8271 0.944165 43.6873 1.05585 44.5338C1.22485 45.8143 1.9821 47.1273 3.49335 49.75C5.0111 52.3727 5.76835 53.6825 6.7921 54.4722C7.46952 54.992 8.24269 55.3731 9.06744 55.5939C9.8922 55.8148 10.7524 55.8709 11.5989 55.7593C12.3789 55.6553 13.1686 55.3368 14.2606 54.7583C15.0421 54.3306 15.9195 54.1086 16.8103 54.1131C17.7012 54.1177 18.5763 54.3486 19.3534 54.7842C20.9231 55.6942 21.8559 57.368 21.9209 59.1815C21.9664 60.4165 22.0834 61.2615 22.3856 61.9862C22.7123 62.7754 23.1913 63.4925 23.7952 64.0964C24.3991 64.7003 25.1162 65.1793 25.9054 65.506C27.0981 66 28.6126 66 31.6416 66C34.6706 66 36.1851 66 37.3779 65.506C38.167 65.1793 38.8841 64.7003 39.488 64.0964C40.0919 63.4925 40.5709 62.7754 40.8976 61.9862C41.1966 61.2615 41.3169 60.4165 41.3624 59.1815C41.4274 57.368 42.3601 55.691 43.9299 54.7842C44.7069 54.3486 45.582 54.1177 46.4729 54.1131C47.3637 54.1086 48.2411 54.3306 49.0226 54.7583C50.1146 55.3368 50.9076 55.6553 51.6876 55.7593C53.3961 55.9839 55.1238 55.521 56.4911 54.4722C57.5148 53.6857 58.2721 52.3727 59.7866 49.75C60.4626 48.58 60.9859 47.6733 61.3759 46.9128M58.7434 37.9233C57.9825 37.4608 57.3515 36.8126 56.9098 36.0394C56.4681 35.2663 56.2301 34.3936 56.2181 33.5033C56.2181 31.6865 57.2061 30.042 58.7434 29.0767C59.7866 28.4202 60.4593 27.897 60.9403 27.273C61.4601 26.5956 61.8412 25.8224 62.062 24.9977C62.2829 24.1729 62.339 23.3127 62.2273 22.4662C62.0583 21.1857 61.3011 19.8727 59.7898 17.25C58.2721 14.6273 57.5148 13.3175 56.4911 12.5277C55.8137 12.008 55.0405 11.6269 54.2158 11.4061C53.391 11.1852 52.5308 11.1291 51.6843 11.2408C50.9043 11.3448 50.1146 11.6633 49.0194 12.2418C48.2383 12.6689 47.3615 12.8905 46.4712 12.886C45.581 12.8814 44.7065 12.6508 43.9299 12.2158C43.1643 11.7604 42.5271 11.118 42.078 10.3489C41.6288 9.57967 41.3826 8.70897 41.3624 7.8185C41.3169 6.5835 41.1998 5.7385 40.8976 5.01375C40.5709 4.22459 40.0919 3.50754 39.488 2.9036C38.8841 2.29966 38.167 1.82067 37.3779 1.494C36.1851 1 34.6706 1 31.6416 1C28.6126 1 27.0981 1 25.9054 1.494C25.1162 1.82067 24.3991 2.29966 23.7952 2.9036C23.1913 3.50754 22.7123 4.22459 22.3856 5.01375C22.0866 5.7385 21.9664 6.5835 21.9209 7.8185C21.9006 8.70897 21.6544 9.57967 21.2052 10.3489C20.7561 11.118 20.1189 11.7604 19.3534 12.2158C18.5763 12.6514 17.7012 12.8823 16.8103 12.8869C15.9195 12.8914 15.0421 12.6694 14.2606 12.2418C13.1686 11.6633 12.3756 11.3448 11.5956 11.2408C9.88714 11.0161 8.15938 11.479 6.7921 12.5277C5.7716 13.3175 5.0111 14.6273 3.4966 17.25C2.8206 18.42 2.29735 19.3268 1.90735 20.0873" stroke="#B6B6B6" strokeWidth="2" strokeLinecap="round"/>
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



export const SettingsInfoSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.5 0C26.0721 0 19.7886 1.90609 14.444 5.47724C9.09938 9.04838 4.93378 14.1242 2.47393 20.0628C0.0140817 26.0014 -0.629527 32.536 0.624493 38.8404C1.87851 45.1448 4.97384 50.9358 9.51904 55.481C14.0642 60.0262 19.8552 63.1215 26.1596 64.3755C32.464 65.6295 38.9986 64.9859 44.9372 62.5261C50.8758 60.0662 55.9516 55.9006 59.5228 50.556C63.0939 45.2114 65 38.9279 65 32.5C64.9909 23.8833 61.5639 15.622 55.4709 9.52908C49.378 3.43612 41.1167 0.00909943 32.5 0ZM32.5 60C27.061 60 21.7442 58.3871 17.2218 55.3654C12.6995 52.3437 9.17474 48.0488 7.09333 43.0238C5.01192 37.9988 4.46732 32.4695 5.52842 27.135C6.58951 21.8005 9.20863 16.9005 13.0546 13.0546C16.9005 9.20862 21.8005 6.5895 27.135 5.5284C32.4695 4.46731 37.9988 5.0119 43.0238 7.09331C48.0488 9.17472 52.3437 12.6995 55.3654 17.2218C58.3872 21.7442 60 27.061 60 32.5C59.9917 39.7909 57.0918 46.7808 51.9363 51.9363C46.7808 57.0917 39.7909 59.9917 32.5 60ZM37.5 47.5C37.5 48.163 37.2366 48.7989 36.7678 49.2678C36.2989 49.7366 35.663 50 35 50C33.6739 50 32.4022 49.4732 31.4645 48.5355C30.5268 47.5978 30 46.3261 30 45V32.5C29.337 32.5 28.7011 32.2366 28.2322 31.7678C27.7634 31.2989 27.5 30.663 27.5 30C27.5 29.337 27.7634 28.7011 28.2322 28.2322C28.7011 27.7634 29.337 27.5 30 27.5C31.3261 27.5 32.5979 28.0268 33.5355 28.9645C34.4732 29.9021 35 31.1739 35 32.5V45C35.663 45 36.2989 45.2634 36.7678 45.7322C37.2366 46.2011 37.5 46.8369 37.5 47.5ZM27.5 18.75C27.5 18.0083 27.7199 17.2833 28.132 16.6666C28.5441 16.0499 29.1297 15.5693 29.8149 15.2854C30.5002 15.0016 31.2542 14.9274 31.9816 15.0721C32.709 15.2167 33.3772 15.5739 33.9017 16.0983C34.4261 16.6228 34.7833 17.291 34.928 18.0184C35.0726 18.7458 34.9984 19.4998 34.7146 20.1851C34.4307 20.8703 33.9501 21.456 33.3334 21.868C32.7167 22.2801 31.9917 22.5 31.25 22.5C30.2554 22.5 29.3016 22.1049 28.5984 21.4016C27.8951 20.6984 27.5 19.7446 27.5 18.75Z" fill="white" fill-opacity="0.5"/>
      </svg>
    </div>
  );
};

export const SettingsResetSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M14.069 19.8621C16.0331 19.8621 17.9532 19.2796 19.5864 18.1884C21.2195 17.0972 22.4924 15.5461 23.244 13.7315C23.9957 11.9168 24.1924 9.92002 23.8092 7.99359C23.426 6.06716 22.4801 4.29762 21.0913 2.90874C19.7024 1.51986 17.9328 0.574018 16.0064 0.190826C14.08 -0.192365 12.0832 0.00430298 10.2685 0.755959C8.45386 1.50762 6.90285 2.7805 5.81161 4.41365C4.72038 6.0468 4.13793 7.96687 4.13793 9.93104V15.0621L1.15862 12.0828L0 13.2414L4.96552 18.2069L9.93103 13.2414L8.77241 12.0828L5.7931 15.0621V9.93104C5.7931 8.29423 6.27847 6.69417 7.18784 5.33322C8.0972 3.97226 9.38971 2.91152 10.9019 2.28514C12.4141 1.65876 14.0781 1.49487 15.6835 1.8142C17.2889 2.13352 18.7635 2.92172 19.9209 4.07912C21.0783 5.23652 21.8665 6.71114 22.1858 8.3165C22.5051 9.92186 22.3412 11.5859 21.7149 13.0981C21.0885 14.6103 20.0277 15.9028 18.6668 16.8122C17.3058 17.7215 15.7058 18.2069 14.069 18.2069V19.8621Z" fill="white" fill-opacity="0.5"/>
      </motion.svg>
    </div>
  );
};


export const SettingsBinSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} fill-rule="evenodd" clip-rule="evenodd" d="M11.28 5.80189e-08C11.6998 0.00010886 12.1088 0.132286 12.4493 0.377808C12.7898 0.62333 13.0444 0.96975 13.177 1.368L13.72 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4C18 4.26522 17.8946 4.51957 17.7071 4.70711C17.5196 4.89464 17.2652 5 17 5H16V17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V5H1C0.734784 5 0.48043 4.89464 0.292893 4.70711C0.105357 4.51957 0 4.26522 0 4C0 3.73478 0.105357 3.48043 0.292893 3.29289C0.48043 3.10536 0.734784 3 1 3H4.28L4.823 1.368C4.9557 0.969588 5.21043 0.623052 5.5511 0.377515C5.89176 0.131978 6.30107 -0.000101061 6.721 5.80189e-08H11.28ZM14 5H4V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17V5ZM11.28 2H6.72L6.387 3H11.613L11.28 2Z" fill="white" fill-opacity="0.5"/>
      </motion.svg>
    </div>
  );
};


export const SidebarArrowSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M5.5 1L1 5.5L5.5 10" stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};


export const SidebarLogoSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M37.5 0C30.0832 0 22.833 2.19934 16.6661 6.31989C10.4993 10.4404 5.69282 16.2971 2.85453 23.1494C0.0162476 30.0016 -0.726377 37.5416 0.720569 44.8159C2.16751 52.0902 5.73904 58.772 10.9835 64.0165C16.228 69.261 22.9098 72.8325 30.1841 74.2794C37.4584 75.7264 44.9984 74.9838 51.8506 72.1455C58.7029 69.3072 64.5596 64.5007 68.6801 58.3339C72.8007 52.167 75 44.9168 75 37.5C74.9891 27.5577 71.0347 18.0258 64.0044 10.9956C56.9742 3.96531 47.4423 0.0109185 37.5 0ZM39 3.03375C42.058 3.16406 45.0848 3.70258 48 4.635V70.365C45.0848 71.2974 42.058 71.8359 39 71.9662V3.03375ZM51 5.7525C54.2716 7.15319 57.3073 9.05053 60 11.3775V63.6337C57.3073 65.9607 54.2716 67.858 51 69.2587V5.7525ZM3.00002 37.5C3.01046 28.6129 6.44589 20.0719 12.592 13.6527C18.738 7.23354 27.1218 3.43029 36 3.03375V71.9662C27.1218 71.5697 18.738 67.7664 12.592 61.3473C6.44589 54.9281 3.01046 46.387 3.00002 37.5ZM63 60.7125V14.2875C68.7896 20.6319 71.9994 28.9109 71.9994 37.5C71.9994 46.089 68.7896 54.368 63 60.7125Z" fill="#F8F8F8"/>
      </motion.svg>
    </div>
  );
};


export const SidebarNewLogSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="55" height="75" viewBox="0 0 55 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M54.6095 34.5233C54.5381 34.2181 54.3926 33.9352 54.1859 33.6996C53.9791 33.464 53.7175 33.2831 53.4241 33.1727L34.6015 26.1146L39.3683 2.28051C39.4497 1.87372 39.3961 1.4515 39.2158 1.0779C39.0354 0.704304 38.7382 0.399708 38.3691 0.210314C38 0.0209208 37.5792 -0.0429367 37.1706 0.0284281C36.7619 0.0997928 36.3877 0.302486 36.1046 0.605763L0.512358 38.7404C0.298604 38.9695 0.144634 39.2479 0.064074 39.5507C-0.0164859 39.8536 -0.0211533 40.1716 0.0504858 40.4767C0.122125 40.7818 0.267862 41.0646 0.474799 41.2999C0.681737 41.5353 0.943496 41.716 1.23691 41.8261L20.0595 48.8842L15.2927 72.7183C15.2108 73.1252 15.264 73.5477 15.4441 73.9216C15.6242 74.2956 15.9214 74.6006 16.2905 74.7903C16.5603 74.9275 16.8586 74.9994 17.1613 75C17.423 75 17.682 74.9461 17.922 74.8417C18.162 74.7373 18.378 74.5845 18.5564 74.393L54.1487 36.2584C54.362 36.0293 54.5157 35.7511 54.596 35.4485C54.6764 35.1459 54.681 34.8281 54.6095 34.5233ZM20.3392 66.8837L24.105 48.0452C24.1943 47.6014 24.1228 47.1403 23.9033 46.7444C23.6838 46.3485 23.3306 46.0436 22.9069 45.8842L5.23787 39.2584L34.3028 8.1151L30.5465 26.9568C30.4572 27.4006 30.5287 27.8616 30.7482 28.2576C30.9677 28.6535 31.3209 28.9584 31.7446 29.1177L49.4136 35.7436L20.3392 66.8837Z" fill="white"/>
      </motion.svg>
    </div>
  );
};


export const SidebarGoalsettingsSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M25.2539 41.5344L33.3928 49.6731L53.7397 29.3262" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M2.99537 43.889C2.34011 42.5186 2 41.0189 2 39.5C2 37.9811 2.34011 36.4814 2.99537 35.111C3.5651 33.9146 4.54175 32.7671 6.49505 30.4721C7.2764 29.5565 7.66706 29.1005 7.99259 28.6123C8.7416 27.4952 9.26165 26.2407 9.52271 24.9213C9.63665 24.3435 9.68549 23.7453 9.77906 22.5489C10.0192 19.5456 10.1372 18.044 10.5807 16.7866C11.0873 15.3549 11.908 14.0548 12.9826 12.9817C14.0571 11.9085 15.3583 11.0895 16.7907 10.5848C18.044 10.1412 19.5456 10.0192 22.5529 9.78314C23.7493 9.68549 24.3435 9.63665 24.9213 9.52271C26.2421 9.26216 27.498 8.74208 28.6164 7.99259C29.1047 7.66706 29.5604 7.28045 30.4721 6.49913C32.7671 4.5458 33.9146 3.56915 35.111 2.99537C36.4814 2.34011 37.9811 2 39.5 2C41.0189 2 42.5186 2.34011 43.889 2.99537C45.0893 3.5651 46.2368 4.54175 48.5279 6.49913C49.4435 7.28045 49.8995 7.66706 50.3876 7.99259C51.506 8.74208 52.7618 9.26216 54.0827 9.52271C54.6566 9.63665 55.2548 9.68549 56.4512 9.78314C59.4584 10.0192 60.9599 10.1412 62.2133 10.5848C63.6449 11.09 64.9454 11.9092 66.0191 12.9823C67.0931 14.0555 67.913 15.3553 68.4194 16.7866M10.5807 62.2133C11.0869 63.6446 11.907 64.9445 12.9808 66.0176C14.0546 67.0907 15.355 67.91 16.7866 68.4152C18.04 68.8628 19.5416 68.9807 22.5489 69.2168C23.7453 69.3146 24.3394 69.3632 24.9173 69.4772C26.238 69.7379 27.494 70.2578 28.6123 71.0075C29.1005 71.333 29.5565 71.7194 30.4679 72.5009C32.7632 74.4542 33.9107 75.4307 35.1071 76.0046C36.4775 76.6598 37.9769 77 39.4958 77C41.0147 77 42.5144 76.6598 43.8848 76.0046C45.0854 75.4349 46.2329 74.4581 48.524 72.5009C49.1156 71.9687 49.7363 71.4701 50.3837 71.0075C51.5018 70.2578 52.7579 69.7379 54.0788 69.4772C54.6524 69.3632 55.2506 69.3146 56.447 69.2168C59.4542 68.9807 60.956 68.8586 62.2094 68.4152C63.641 67.91 64.9412 67.0907 66.0152 66.0176C67.0889 64.9445 67.9091 63.6446 68.4152 62.2133C68.8586 60.9599 68.9768 59.4542 69.2168 56.4512C69.3104 55.2548 69.3593 54.6566 69.4733 54.0788C69.7337 52.7603 70.2545 51.5027 71.0033 50.3876C71.3288 49.8995 71.7194 49.4435 72.4967 48.5279C74.45 46.2329 75.4307 45.0854 76.0046 43.889C76.6598 42.5186 77 41.0189 77 39.5C77 37.9811 76.6598 36.4814 76.0046 35.111" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      </motion.svg>
    </div>
  )
}


export const SidebarProgressSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M37.5 15C36.5054 15 35.5516 15.3951 34.8484 16.0984C34.1451 16.8016 33.75 17.7554 33.75 18.75V56.25C33.75 57.2446 34.1451 58.1984 34.8484 58.9017C35.5516 59.6049 36.5054 60 37.5 60C38.4946 60 39.4484 59.6049 40.1516 58.9017C40.8549 58.1984 41.25 57.2446 41.25 56.25V18.75C41.25 17.7554 40.8549 16.8016 40.1516 16.0984C39.4484 15.3951 38.4946 15 37.5 15ZM18.75 37.5C17.7554 37.5 16.8016 37.8951 16.0984 38.5984C15.3951 39.3016 15 40.2554 15 41.25V56.25C15 57.2446 15.3951 58.1984 16.0984 58.9017C16.8016 59.6049 17.7554 60 18.75 60C19.7446 60 20.6984 59.6049 21.4016 58.9017C22.1049 58.1984 22.5 57.2446 22.5 56.25V41.25C22.5 40.2554 22.1049 39.3016 21.4016 38.5984C20.6984 37.8951 19.7446 37.5 18.75 37.5ZM56.25 30C55.2554 30 54.3016 30.3951 53.5983 31.0984C52.8951 31.8016 52.5 32.7554 52.5 33.75V56.25C52.5 57.2446 52.8951 58.1984 53.5983 58.9017C54.3016 59.6049 55.2554 60 56.25 60C57.2446 60 58.1984 59.6049 58.9017 58.9017C59.6049 58.1984 60 57.2446 60 56.25V33.75C60 32.7554 59.6049 31.8016 58.9017 31.0984C58.1984 30.3951 57.2446 30 56.25 30ZM63.75 0H11.25C8.26631 0 5.40483 1.18526 3.29505 3.29505C1.18526 5.40483 0 8.26631 0 11.25V63.75C0 66.7337 1.18526 69.5952 3.29505 71.705C5.40483 73.8147 8.26631 75 11.25 75H63.75C66.7337 75 69.5952 73.8147 71.705 71.705C73.8147 69.5952 75 66.7337 75 63.75V11.25C75 8.26631 73.8147 5.40483 71.705 3.29505C69.5952 1.18526 66.7337 0 63.75 0ZM67.5 63.75C67.5 64.7446 67.1049 65.6984 66.4017 66.4017C65.6984 67.1049 64.7446 67.5 63.75 67.5H11.25C10.2554 67.5 9.30161 67.1049 8.59835 66.4017C7.89509 65.6984 7.5 64.7446 7.5 63.75V11.25C7.5 10.2554 7.89509 9.30161 8.59835 8.59835C9.30161 7.89509 10.2554 7.5 11.25 7.5H63.75C64.7446 7.5 65.6984 7.89509 66.4017 8.59835C67.1049 9.30161 67.5 10.2554 67.5 11.25V63.75Z" fill="white"/>
      </motion.svg>
    </div>
  )
}


export const SidebarLogEntriesSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg variants={variants} width="93" height="79" viewBox="0 0 93 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants} d="M28.4704 63.7646L15.2352 76.9999L2 63.7646" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M28.4704 15.2352L15.2352 2L2 15.2352" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M15.2354 2V76.9996" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M90.2352 6.41211H41.7061" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M72.5882 28.4707H41.7061" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path variants={variants} d="M90.2352 50.5293H41.7061" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <motion.path  variants={variants} d="M72.5882 72.5879H41.7061" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </div>
  );
};


export const SidebarHealthSVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="63" height="75" viewBox="0 0 63 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M56.6437 11.2875C52.3987 4.00875 46.665 0 40.5 0H22.5C16.335 0 10.6012 4.00875 6.375 11.2875C2.25 18.315 0 27.6225 0 37.5C0 47.3775 2.25 56.685 6.375 63.7125C10.6012 70.9912 16.335 75 22.5 75H40.5C46.665 75 52.3987 70.9912 56.6437 63.7125C60.75 56.685 63 47.3775 63 37.5C63 27.6225 60.75 18.315 56.6437 11.2875ZM55.2262 60H40.5375C43.2525 53.9475 44.8012 46.6763 44.9775 39H59.9775C59.79 46.7888 58.125 54.105 55.2262 60ZM44.9775 36C44.8012 28.3238 43.2525 21.0525 40.5375 15H55.2262C58.1287 20.895 59.79 28.2113 59.9775 36H44.9775ZM40.5 3C45.3337 3 49.9462 6.19125 53.565 12H39.0412C38.91 11.7638 38.7787 11.52 38.6437 11.2875C36.5512 7.7025 34.0987 4.9125 31.41 3H40.5ZM8.9475 62.2012C5.11125 55.6275 3 46.875 3 37.5C3 28.125 5.11125 19.3725 8.9475 12.7988C12.6337 6.48 17.445 3 22.5 3C27.555 3 32.3662 6.48 36.0525 12.7988C39.8887 19.3725 42 28.1437 42 37.5C42 46.8563 39.8887 55.6275 36.0525 62.2012C32.3662 68.52 27.555 72 22.5 72C17.445 72 12.6337 68.52 8.9475 62.2012ZM40.5 72H31.41C34.0987 70.0913 36.5512 67.2975 38.6437 63.7125C38.7787 63.48 38.91 63.2363 39.0412 63H53.565C49.9462 68.8088 45.3337 72 40.5 72Z" fill="white"/>
      </motion.svg>
    </div>
  )
}


export const SettingsBin2SVG = ({ variants }) => {
  return (
    <div className="random-icon">
      <motion.svg width="66" height="69" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path variants={variants}  d="M63.3889 12.833H2M57.3692 21.8608L55.7081 46.7775C55.0689 56.3613 54.7511 61.1533 51.6275 64.0747C48.5039 66.9997 43.6975 66.9997 34.0919 66.9997H31.2969C21.6914 66.9997 16.885 66.9997 13.7614 64.0747C10.6378 61.1533 10.3164 56.3613 9.68083 46.7775L8.01972 21.8608" stroke="white" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round"/>
        <motion.path variants={variants}  d="M12.833 12.8333H13.2302C14.6835 12.7962 16.0918 12.3214 17.2708 11.4709C18.4498 10.6205 19.3448 9.43398 19.8386 8.06667L19.9613 7.69472L20.3116 6.64389C20.6113 5.74472 20.763 5.29694 20.9616 4.91417C21.3524 4.16446 21.9132 3.51663 22.5992 3.02252C23.2852 2.5284 24.0773 2.20172 24.9122 2.06861C25.3347 2 25.8077 2 26.7538 2H38.6344C39.5805 2 40.0536 2 40.4761 2.06861C41.3109 2.20172 42.1031 2.5284 42.7891 3.02252C43.4751 3.51663 44.0359 4.16446 44.4266 4.91417C44.6252 5.29694 44.7769 5.74472 45.0766 6.64389L45.4269 7.69472C45.8845 9.21599 46.831 10.5439 48.1196 11.4729C49.4083 12.4019 50.9673 12.88 52.5552 12.8333" stroke="white" strokeOpacity="0.5" strokeWidth="4"/>
      </motion.svg>
    </div>
  )
}


export const SettingsAccordionCheckers = ({ variants }) => {
  return (
    <div className="random-icon">
      <svg width="77" height="55" viewBox="0 0 77 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M75.0645 1.40034C75.9611 2.29724 76.4648 3.51354 76.4648 4.78176C76.4648 6.04999 75.9611 7.26629 75.0645 8.16319L29.628 53.5997C28.7311 54.4963 27.5148 55 26.2466 55C24.9783 55 23.762 54.4963 22.8651 53.5997L1.34259 32.0771C0.471364 31.1751 -0.0107164 29.9669 0.000180801 28.7129C0.011078 27.4589 0.51408 26.2593 1.40085 25.3725C2.28761 24.4858 3.4872 23.9828 4.74123 23.9719C5.99526 23.961 7.2034 24.443 8.10544 25.3143L26.2466 43.4554L68.3016 1.40034C69.1985 0.503702 70.4148 0 71.683 0C72.9512 0 74.1675 0.503702 75.0645 1.40034Z" fill="white"/>
      </svg>
    </div>
  )
}

export const SettingsAccordionSlider = ({ variants }) => {
  return (
    <div className="random-icon">
      <svg width="94" height="68" viewBox="0 0 94 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3775 56.6414L18.2532 13.7843C18.0795 12.5685 18.169 11.3296 18.5157 10.1514C18.8625 8.97319 19.4584 7.88329 20.2631 6.95547C21.0677 6.02765 22.0624 5.2836 23.1797 4.77369C24.297 4.26378 25.5108 3.99992 26.739 4H41.2589C42.4871 3.99992 43.7009 4.26378 44.8182 4.77369C45.9355 5.2836 46.9302 6.02765 47.7348 6.95547C48.5395 7.88329 49.1354 8.97319 49.4822 10.1514C49.8289 11.3296 49.9184 12.5685 49.7447 13.7843L43.6204 56.6414C43.3284 58.6839 42.3095 60.5525 40.7507 61.9043C39.192 63.256 37.1979 64.0001 35.1347 64H32.8632C30.8 64.0001 28.8059 63.256 27.2471 61.9043C25.6884 60.5525 24.6695 58.6839 24.3775 56.6414Z" stroke="white" strokeWidth="7"/>
        <path d="M4 34H21.1429M89.7143 34H46.8571" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export const SettingsAccordionCounters = ({ variants }) => {
  return (
    <div className="random-icon">
      <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.5 4V69ZM69 36.5H4Z" fill="white"/>
        <path d="M36.5 4V69M69 36.5H4" stroke="white" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

























