import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import SearchPage from './SearchPage';

const LandingPage: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="relative">
      <SearchPage />
      {isAuthenticated && (
        <div className="text-center mt-10">
          <h2 className="text-lg font-semibold">Welcome back, {user?.name}!</h2>
        </div>
      )}
    </div>
  );
};

export default LandingPage;