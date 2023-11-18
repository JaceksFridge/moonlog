

import React from 'react'

const TopNav = ({ activeTab, TabClick }) => {
  return (
    <div className="topnav">
        <div 
            className={`nav-item health ${activeTab === 'health' ? 'active' : ''}`}
            onClick={() => TabClick('health')}
        >health
        </div>
        <div 
            className={`nav-item wealth ${activeTab === 'wealth' ? 'active' : ''}`}
            onClick={() => TabClick('wealth')}
        >wealth
        </div>
        <div 
            className={`nav-item happiness ${activeTab === 'happiness' ? 'active' : ''}`}
            onClick={() => TabClick('happiness')}
        >happiness
        </div>
        <div 
            className={`nav-item nodo ${activeTab === 'nodo' ? 'active' : ''}`}
            onClick={() => TabClick('nodo')}
        >nodo
        </div>

    </div>
  )
}

export default TopNav
