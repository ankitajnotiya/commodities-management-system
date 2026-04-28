import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  // Sample dashboard statistics
  const stats = [
    {
      title: 'Total Items',
      value: '156',
      change: '+12%',
      changeType: 'positive',
      icon: '📦',
      color: 'bg-blue-500'
    },
    {
      title: 'Active Alerts',
      value: '5',
      change: '-2',
      changeType: 'positive',
      icon: '⚠️',
      color: 'bg-yellow-500'
    },
    {
      title: 'Low Stock Items',
      value: '8',
      change: '+3',
      changeType: 'negative',
      icon: '📉',
      color: 'bg-red-500'
    },
    {
      title: 'Total Value',
      value: '$45,678',
      change: '+8%',
      changeType: 'positive',
      icon: '💰',
      color: 'bg-green-500'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New commodity added', item: 'Laptop Computer', time: '2 hours ago', type: 'add' },
    { id: 2, action: 'Stock updated', item: 'Office Chair', time: '4 hours ago', type: 'update' },
    { id: 3, action: 'Low stock alert', item: 'USB Cables', time: '6 hours ago', type: 'alert' },
    { id: 4, action: 'Commodity removed', item: 'Old Monitor', time: '1 day ago', type: 'remove' }
  ];

  const topCategories = [
    { name: 'Electronics', count: 45, percentage: 29 },
    { name: 'Office Supplies', count: 32, percentage: 21 },
    { name: 'Furniture', count: 28, percentage: 18 },
    { name: 'Software', count: 25, percentage: 16 },
    { name: 'Other', count: 26, percentage: 16 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}! Here's your commodity overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-400`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'add' ? 'bg-green-500' :
                      activity.type === 'update' ? 'bg-blue-500' :
                      activity.type === 'alert' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.item}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Categories</h2>
            <div className="space-y-3">
              {topCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <span className="text-gray-500">{category.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button 
              onClick={() => navigate('/add-commodity')}
              className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <span className="mr-2">➕</span> Add Commodity
            </button>
            <button 
              onClick={() => navigate('/generate-report')}
              className="flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <span className="mr-2">📊</span> Generate Report
            </button>
            <button 
              onClick={() => navigate('/view-alerts')}
              className="flex items-center justify-center px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <span className="mr-2">⚠️</span> View Alerts
            </button>
            <button 
              onClick={() => navigate('/settings')}
              className="flex items-center justify-center px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              <span className="mr-2">⚙️</span> Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
