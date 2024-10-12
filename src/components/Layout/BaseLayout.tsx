import React, { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <TopBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;