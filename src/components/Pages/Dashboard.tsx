import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import DashboardLayout from 'components/Layout/DashboardLayout';
 

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-text-primary mb-6">
        Welcome, {user?.name}!
      </h1>    
    </DashboardLayout>
  );
};

export default Dashboard;