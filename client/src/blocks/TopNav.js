

import React from 'react'

const TopNav = ({ activeTab, onTabClick }) => {
  return (
    <div className="topnav">
        <div 
            className={`nav-item health ${activeTab === 'health' ? 'active' : ''}`}
            onClick={() => onTabClick('health')}
        >health</div>
        <div className={`nav-item wealth ${activeTab === 'wealth' ? 'active' : ''}`}>wealth</div>
        <div className={`nav-item happiness ${activeTab === 'happiness' ? 'active' : ''}`}>happiness</div>
        <div className={`nav-item nodo ${activeTab === 'nodo' ? 'active' : ''}`}>nodo</div>
    </div>
  )
}

export default TopNav
