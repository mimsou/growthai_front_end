import React from 'react';

const WaveDivider: React.FC = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 right-0 -z-10">
      <svg viewBox="0 0 1440 320" className="w-full">
        <path fill="currentColor" fillOpacity="1" className="text-gray-200 dark:text-gray-800" d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,144C560,128,640,128,720,138.7C800,149,880,171,960,170.7C1040,171,1120,149,1200,144C1280,139,1360,149,1400,154.7L1440,160L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default WaveDivider;