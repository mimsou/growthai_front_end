import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

type IconName = keyof typeof HeroIcons;

interface AuditCardLayoutProps {
  children: React.ReactNode;
  title: string;
  iconName?: IconName;
}

const AuditCardLayout: React.FC<AuditCardLayoutProps> = ({ children, title, iconName, ...props }) => {
  const IconComponent = iconName ? HeroIcons[iconName] : null;

  return (
    <div  {...props}>
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-base font-medium text-gray-800 flex items-center">
          {IconComponent && <IconComponent className="w-5 h-5 mr-2 text-indigo-600" />}
          {title}
        </h2>
      </div>
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};

export default AuditCardLayout;