import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserIcon, UserPlusIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signIn } from '../../store/actions/authActions';

const TopBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleSignOut = () => {
   // dispatch(signOut());
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">SEO Audit SaaS</h1>
        <nav className="flex items-center space-x-6">
          {isAuthenticated ? (
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          ) : (
            <>
              <Link to="/sign-in" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <UserIcon className="h-5 w-5" />
                <span className="font-medium">Sign In</span>
              </Link>
              <Link to="/sign-up" className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all">
                <UserPlusIcon className="h-5 w-5" />
                <span className="font-medium">Sign Up</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
