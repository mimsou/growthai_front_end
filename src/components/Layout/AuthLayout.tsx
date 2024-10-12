import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="max-w-lg mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center text-gray-900">{title}</h2>
      <p className="text-center text-gray-600 mb-6">{subtitle}</p>
      {children}
    </div>
  );
};

export default AuthLayout;
