

import React from 'react'

const TopNavDesktop = ({ activeTab, TabClick }) => {
  return (
      <div className="top-progress">
        <div className="top-container">
        <div 
          className={`top-element health ${activeTab === 'health' ? 'active' : ''}`}
          onClick={() => TabClick('health')}
        >
          <div className="number">1</div>
          <div className="name">health</div>
        </div>
        <div 
          className={`top-element wealth ${activeTab === 'wealth' ? 'active' : ''}`}
          onClick={() => TabClick('wealth')}
        >
          <div className="number">2</div>
          <div className="name">wealth</div>
        </div>
        <div 
          className={`top-element happiness ${activeTab === 'happiness' ? 'active' : ''}`}
          onClick={() => TabClick('happiness')}
        >
          <div className="number">3</div>
          <div className="name">happiness</div>
        </div>
        <div 
          className={`top-element nodo ${activeTab === 'nodo' ? 'active' : ''}`}
          onClick={() => TabClick('nodo')}
        >
          <div className="number">4</div>
          <div className="name">nodo</div>
        </div>
        <div className="progress-line"></div>
      </div>
    </div>
  )
}

export default TopNavDesktop
