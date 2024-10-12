import React from 'react';

interface GoogleIconProps {
  className?: string;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <path fill="#EA4335" d="M24 9.5c3.2 0 5.4 1.4 6.6 2.6l4.9-4.9C32.8 5.6 28.8 4 24 4c-6.1 0-11.4 3.4-14.1 8.4l5.7 4.5c1.5-4.5 5.8-7.4 10.4-7.4z"/>
    <path fill="#4285F4" d="M13.5 15.5l-5.7-4.5C5.3 13.2 4 16.5 4 20s1.3 6.8 3.8 9.1l5.5-4.4c-.7-1.7-1.1-3.4-1.1-5.2s.4-3.5 1.1-5.1z"/>
    <path fill="#FBBC05" d="M24 44c4.3 0 7.9-1.4 10.5-3.7l-5.1-4.1c-1.4 1-3.2 1.6-5.3 1.6-4.4 0-8.2-2.9-9.6-7l-5.5 4.3C12.6 40.6 18 44 24 44z"/>
    <path fill="#34A853" d="M43.6 20.3H24v7.4h11.3c-1 3.1-3.5 5.7-6.6 7l5.1 4.1c3.3-3 5.2-7.5 5.2-12.5 0-1-.1-2-.3-3z"/>
  </svg>
);
