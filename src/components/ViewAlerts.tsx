import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ViewAlerts: React.FC = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Critical Stock Alert',
      message: 'USB-C Cable is out of stock. Immediate restocking required.',
      commodity: 'USB-C Cable',
      category: 'Electronics',
      time: '2 hours ago',
      priority: 'high',
      action: 'Order Now'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Low Stock Warning',
      message: 'Office Chair stock is below minimum threshold (5 units remaining).',
      commodity: 'Office Chair',
      category: 'Furniture',
      time: '4 hours ago',
      priority: 'medium',
      action: 'View Details'
    },
    {
      id: 3,
      type: 'info',
      title: 'Price Update Alert',
      message: 'Laptop Computer prices have increased by 5% in the market.',
      commodity: 'Laptop Computer',
      category: 'Electronics',
      time: '6 hours ago',
      priority: 'low',
      action: 'Review Price'
    },
    {
      id: 4,
      type: 'critical',
      title: 'Expiry Alert',
      message: 'Software licenses for 5 items will expire in 7 days.',
      commodity: 'Software Licenses',
      category: 'Software',
      time: '1 day ago',
      priority: 'high',
      action: 'Renew Licenses'
    },
    {
      id: 5,
      type: 'warning',
      title: 'Quality Alert',
      message: 'Customer complaints received for Monitor Stand quality.',
      commodity: 'Monitor Stand',
      category: 'Furniture',
      time: '2 days ago',
      priority: 'medium',
      action: 'Investigate'
    },
    {
      id: 6,
      type: 'info',
      title: 'Storage Alert',
      message: 'Warehouse capacity at 85%. Consider organizing storage.',
      commodity: 'Storage',
      category: 'Other',
      time: '3 days ago',
      priority: 'low',
      action: 'Optimize Storage'
    }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesFilter = filter === 'all' || alert.type === filter;
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📢';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return isDark ? 'bg-red-900 text-red-200' : 'bg-red-50 text-red-800';
      case 'warning': return isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-50 text-yellow-800';
      case 'info': return isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-50 text-blue-800';
      default: return isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return isDark ? 'text-red-400' : 'text-red-600';
      case 'medium': return isDark ? 'text-yellow-400' : 'text-yellow-600';
      case 'low': return isDark ? 'text-blue-400' : 'text-blue-600';
      default: return isDark ? 'text-gray-400' : 'text-gray-600';
    }
  };

  const handleAction = (alertId: number, action: string) => {
    console.log(`Action "${action}" triggered for alert ${alertId}`);
    alert(`Action "${action}" has been initiated. This would normally open the relevant workflow.`);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pt-1s0 pb-8`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>
            System Alerts
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Monitor and manage system alerts and notifications
          </p>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Critical</p>
                <p className={`text-2xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>2</p>
              </div>
              <span className="text-2xl">🚨</span>
            </div>
          </div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Warnings</p>
                <p className={`text-2xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>2</p>
              </div>
              <span className="text-2xl">⚠️</span>
            </div>
          </div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Info</p>
                <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>2</p>
              </div>
              <span className="text-2xl">ℹ️</span>
            </div>
          </div>
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total</p>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>6</p>
              </div>
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-6`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Filter Tabs */}
            <div className="flex space-x-2">
              {['all', 'critical', 'warning', 'info'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === type
                      ? type === 'critical' ? 'bg-red-600 text-white' :
                        type === 'warning' ? 'bg-yellow-600 text-white' :
                        type === 'info' ? 'bg-blue-600 text-white' :
                        'bg-gray-600 text-white'
                      : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search alerts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full md:w-64 px-4 py-2 pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map(alert => (
            <div key={alert.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Alert Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${getAlertColor(alert.type)}`}>
                    {getAlertIcon(alert.type)}
                  </div>

                  {/* Alert Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {alert.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAlertColor(alert.type)}`}>
                        {alert.type.toUpperCase()}
                      </span>
                      <span className={`text-sm ${getPriorityColor(alert.priority)}`}>
                        {alert.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                    
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      {alert.message}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        📦 {alert.commodity}
                      </span>
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        🏷️ {alert.category}
                      </span>
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        ⏰ {alert.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAction(alert.id, alert.action)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    alert.type === 'critical' ? 'bg-red-600 text-white hover:bg-red-700' :
                    alert.type === 'warning' ? 'bg-yellow-600 text-white hover:bg-yellow-700' :
                    'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {alert.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className={`text-center py-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
            <span className="text-4xl block mb-4">📭</span>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No alerts found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAlerts;
