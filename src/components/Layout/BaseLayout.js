import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import WaveDivider from '../Ui/WaveDivider';

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 min-h-screen flex flex-col items-center relative">
      <TopBar />
      <main className="flex-grow flex flex-col items-center justify-center mt-32 space-y-12">
        {children} 
      </main>
      <WaveDivider />
      <Footer />
    </div>
  );
};

export default BaseLayout;
