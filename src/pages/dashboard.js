/**
 * It returns the AppLayout component, which contains the DashboardMain component
 * @returns The AppLayout component is being returned with the DashboardMain component nested inside of
 * it.
 */
import React from 'react';
import DashboardMain from '../components/pages/Dashboard';

const Dashboard = () => {
  return (
    <>
      <DashboardMain />
    </>
  );
};

export default Dashboard;
