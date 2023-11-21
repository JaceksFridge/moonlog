

import React from 'react';
import DashboardSidebarDesktop from './DashboardSidebarDesktop';


const MyPage = ({ data }) => {


    return (
      <div className="dashboard-desktop">
        <DashboardSidebarDesktop />
        <div className="dashboard-main">
          Main
        </div>
      </div>
    );
};

export default MyPage;
