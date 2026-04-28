import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pt-10 pb-8`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className={`text-3xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>
            About Commodities Management System
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive solution for efficient inventory management
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview Section */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
              <span className="mr-2">📋</span> Overview
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}>
              The Commodities Management System is a modern web application designed to streamline inventory management for businesses of all sizes. Built with cutting-edge technology, it provides an intuitive interface for tracking, managing, and analyzing your commodity inventory.
            </p>
          </div>

          {/* Features Section */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
              <span className="mr-2">✨</span> Key Features
            </h2>
            <ul className={`${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-3`}>
              <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Role-based access control for secure operations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Real-time inventory tracking and management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Comprehensive reporting and analytics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Dark/Light theme support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Advanced search and filtering</span>
                </li>
              </ul>
          </div>

          {/* Technology Stack Section */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
              <span className="mr-2">⚡</span> Technology Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>Frontend</h3>
                  <ul className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                    <li>• React 18</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• React Router</li>
                  </ul>
                </div>
                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>Features</h3>
                  <ul className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                    <li>• Context API</li>
                    <li>• Local Storage</li>
                    <li>• Responsive Design</li>
                    <li>• Dark Mode</li>
                  </ul>
                </div>
              </div>
            </div>

          {/* Version Information Section */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 flex items-center`}>
                <span className="mr-2">🚀</span> Version Information
              </h2>
              <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                <p><strong>Version:</strong> 1.0.0</p>
                <p><strong>Last Updated:</strong> January 2024</p>
                <p><strong>License:</strong> MIT License</p>
                <p><strong>Developer:</strong> Commodities Management Team</p>
              </div>
            </div>
        </div>

        {/* Footer Section */}
        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="text-center">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
              Thank you for using our Commodities Management System
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <button className={`px-4 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg ${
                isDark 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}>
                📧 Contact Support
              </button>
              <button className={`px-4 py-3 rounded-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}>
                📚 Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
