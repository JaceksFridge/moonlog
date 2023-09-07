import React from 'react'

const TopNav2 = ({ setActiveTab, submit}) => {
  return (
    <div className="topnav2">
        <div className="backBtn" onClick={() => setActiveTab('happiness')}>
            <img src="/icons/iconwhitedots.svg" alt="back" />
        </div>
        <div className="nodoBtn">
            <h5>nodo's</h5>
        </div>
        <div className="doneBtn" onClick={submit}>
            <img src="/icons/iconwhitecheck.svg" alt="done" />
        </div>
    </div>
  )
}

export default TopNav2
