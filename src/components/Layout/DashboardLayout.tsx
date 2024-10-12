import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <main className="flex-1 p-6 bg-background">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
