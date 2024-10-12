import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  label: string;
  link: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav className="flex space-x-4">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;