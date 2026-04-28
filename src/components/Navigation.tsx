import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      roles: ['MANAGER']
    },
    {
      path: '/commodities',
      label: 'View Products',
      roles: ['MANAGER', 'STORE_KEEPER']
    },
    
    {
      path: '/add-commodity',
      label: 'Add Commodity',
      roles: ['MANAGER', 'STORE_KEEPER']
    },
    {
      path: '/about',
      label: 'About Us',
      roles: ['MANAGER', 'STORE_KEEPER']
    }
  ];

  return (
    <nav className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Commodity Management</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                // Check if user's role is allowed for this menu item
                if (user && item.roles.includes(user.role)) {
                  return (
                    <button
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        isActive(item.path)
                          ? isDark ? 'border-blue-400 text-white' : 'border-blue-500 text-gray-900'
                          : isDark ? 'border-transparent text-gray-300 hover:border-gray-600 hover:text-white' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      } transition-colors duration-200`}
                    >
                      {item.label}
                    </button>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
              title="Toggle theme"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            
            {/* User info - Desktop */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right">
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.role?.replace('_', ' ')}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Logout button - Desktop */}
            <button
              onClick={handleLogout}
              className="hidden sm:block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Logout
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`sm:hidden p-2 rounded-lg ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`sm:hidden border-t ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* User info - Mobile */}
            <div className="flex items-center space-x-3 px-3 py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} mb-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.role?.replace('_', ' ')}</p>
              </div>
            </div>

            {/* Navigation items and Logout button on same line */}
            <div className="flex flex-wrap gap-2 px-3 pb-2">
              {navItems.map((item) => {
                if (user && item.roles.includes(user.role)) {
                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex-1 min-w-[100px] px-3 py-2 rounded-md text-xs font-medium text-center ${
                        isActive(item.path)
                          ? isDark ? 'bg-blue-900 border-blue-400 text-blue-300' : 'bg-blue-50 border-blue-500 text-blue-700'
                          : isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } transition-colors duration-200`}
                    >
                      {item.label}
                    </button>
                  );
                }
                return null;
              })}

              {/* Logout button - Mobile */}
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 min-w-[80px] px-3 py-2 rounded-md text-xs font-medium bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 text-center"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
