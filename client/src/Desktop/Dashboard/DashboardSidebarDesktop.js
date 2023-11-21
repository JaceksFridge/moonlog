

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaHome, FaUser } from 'react-icons/fa'; // Example icons
import { HealthIconSVG, WealthIconSVG, HappinessIconSVG, NodoIconSVG,
    SidebarArrowSVG, SidebarLogoSVG, SidebarNewLogSVG, SidebarGoalsettingsSVG,
    SidebarLogEntriesSVG, SidebarProgressSVG, SettingsIcon, LogoutIcon
} from '../../blocks/svg';

const DashboardSidebarDesktop = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);



    return (
        <motion.div
            className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}
            animate={{ width: isCollapsed ? '5rem' : '18rem' }}
        >
            <div className="top-sidebar">
                <SidebarLogoSVG />
                {!isCollapsed && <div className="logo-text">Moonlog.</div>}
            </div>
            <div className="main-sidebar">
                <div 
                    className={`toggle-btn ${isCollapsed ? 'collapsed' : 'expanded'}`} 
                    onClick={toggleCollapse} 
                >
                    <SidebarArrowSVG />
                </div>
                <div className="main-inner-content">
                    <div className="big-menu">
                        <div className="menu-group">
                            { !isCollapsed && <p className="menu-label">navigation</p> }
                            <div className="menu-line"></div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <SidebarNewLogSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">New Log</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <SidebarGoalsettingsSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">goal settings</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="menu-group">
                            { !isCollapsed && <p className="menu-label">dashboard</p> }
                            <div className="menu-line"></div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <SidebarProgressSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">progress</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <SidebarLogEntriesSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">log entries</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <HealthIconSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">health</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <WealthIconSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">wealth</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <HappinessIconSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">happiness</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <NodoIconSVG />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">nodo</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="bottom-menu">
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <SettingsIcon />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">settings</p>
                                    }
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-highlight">
                                    <div className="menu-item-icon">
                                        <LogoutIcon />
                                    </div>
                                    {!isCollapsed && 
                                        <p className="menu-item-name">logout</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default DashboardSidebarDesktop;
