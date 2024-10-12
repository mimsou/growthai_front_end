import WaveDivider from 'components/Ui/WaveDivider';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
    <WaveDivider />
    <footer className="bg-gray-200 text-gray-700 py-6 w-full   bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <nav className="mt-4">
          <a href="/privacy-policy" className="mx-2 text-sm hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="mx-2 text-sm hover:text-gray-900 transition-colors">Terms of Service</a>
        </nav>
      </div>
    </footer>
    </>
  );
};

export default Footer;
