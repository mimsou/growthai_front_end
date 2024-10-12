import React from 'react';

interface IconProps {
  className?: string;
}

export const ChartBarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8v8h-2V8h2zm-4 4v4H8v-4h4zm8-8H4v16h16V4z"/>
  </svg>
);

export const RobotIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h2a2 2 0 0 1 2 2v2h1a3 3 0 0 1 3 3v7h-2v-7a1 1 0 0 0-1-1h-1v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3H6a1 1 0 0 0-1 1v7H3v-7a3 3 0 0 1 3-3h1V9a2 2 0 0 1 2-2h2V5.72c-.6-.34-1-.98-1-1.72a2 2 0 0 1 2-2z"/>
  </svg>
);

export const SpeedIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.3-4.8L11 13V7h2v5.3l3.3 2.3-1 1.4z"/>
  </svg>
);

// Add more icons as needed

export type IconName = 'ChartBar' | 'Robot' | 'Speed'; // Add more icon names as you create them

export const getIcon = (name: IconName): React.FC<IconProps> => {
  switch (name) {
    case 'ChartBar':
      return ChartBarIcon;
    case 'Robot':
      return RobotIcon;
    case 'Speed':
      return SpeedIcon;
    default:
      return ChartBarIcon; // Default icon
  }
};