import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-4">
      <h2 className="text-xl font-semibold text-text-primary mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
