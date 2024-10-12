import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserIcon, UserPlusIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { signOut } from '../../store/actions/authActions';
import { RootState } from '../../store/reducers';
import Menu from '../Ui/Menu';

const TopBar: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'SEO Audit', link: '/seo-audit' },
    { label: 'Keyword Research', link: '/keyword-research' },
    { label: 'Content Analysis', link: '/content-analysis' },
    { label: 'Backlink Analysis', link: '/backlink-analysis' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-gray-900 transition-colors mr-8">
              SEO Audit SaaS
            </Link>
            <Menu items={menuItems} />
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                {user?.picture ? (
                  <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <UserIcon className="w-5 h-5 text-gray-500" />
                  </div>
                )}
                <span className="text-gray-700 text-sm mr-4">{user?.name}</span>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center transition-colors"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="text-gray-600 hover:text-gray-800 font-medium text-sm mr-6 transition-colors">
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center transition-colors"
                >
                  <UserPlusIcon className="h-4 w-4 mr-1" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
