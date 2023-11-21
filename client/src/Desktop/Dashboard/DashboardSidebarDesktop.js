

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaHome, FaUser } from 'react-icons/fa'; // Example icons
import { HealthIconSVG, WealthIconSVG, HappinessIconSVG, NodoIconSVG,
    SidebarArrowSVG
} from '../../blocks/svg';

const DashboardSidebarDesktop = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);



    return (
        <motion.div
            className="sidebar"
            animate={{ width: isCollapsed ? '4rem' : '18rem' }}
        >
            <div className="top-sidebar">

            </div>
            <div className="main-sidebar">
                <div className={`toggle-btn ${isCollapsed ? 'collapsed' : 'expanded'}`} onClick={toggleCollapse} >
                    <SidebarArrowSVG />
                </div>
                <div className="menu-item">
                    <FaHome />
                    {!isCollapsed && <span style={{ marginLeft: '10px' }}>Home</span>}
                </div>
                <div className="menu-item">
                    <div className="menu-item-icon">
                        <HealthIconSVG />
                    </div>
                    {!isCollapsed && 
                        <span className="menu-item-name">Profile</span>
                    }
                </div>
            </div>

        </motion.div>
    );
};

export default DashboardSidebarDesktop;
