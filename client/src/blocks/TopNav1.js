import React from 'react';

const TopNav1 = ({ activeTab, setActiveTab }) => {

  const tabList = ["health", "wealth", "happiness"];

  return (
    <div className="topnav1">
      
      {tabList.map((tab) => (
        <div 
          key={tab}
          className={tab === activeTab ? "active" : ""}
          onClick={() => setActiveTab(tab)}>
            <h5>{tab}</h5>
        </div>
      ))}
      
    </div>
  );
};

export default TopNav1;
