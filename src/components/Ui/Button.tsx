import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', onClick, fullWidth = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white py-3 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
