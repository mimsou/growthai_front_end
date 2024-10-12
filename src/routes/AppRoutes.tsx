import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import BaseLayout from 'components/Layout/BaseLayout';
import LandingPage from 'components/Pages/LandingPage';
import SignIn from 'components/Auth/SignIn';
import SignUp from 'components/Auth/SignUp';
import Dashboard from 'components/Pages/Dashboard';
import SearchPage from 'components/Pages/SearchPage';
import AuditPage from 'components/Pages/AuditPage';
import { AnimatePresence } from 'framer-motion';

const AppRoutes: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const location = useLocation();

  return (
    <BaseLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route
            path="/sign-in"
            element={isAuthenticated ? <Navigate to="/" replace /> : <SignIn />}
          />
          <Route
            path="/sign-up"
            element={isAuthenticated ? <Navigate to="/" replace /> : <SignUp />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" replace />}
          />
        </Routes>
      </AnimatePresence>
    </BaseLayout>
  );
};

export default AppRoutes;