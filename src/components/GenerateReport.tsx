import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const GenerateReport: React.FC = () => {
  const { isDark } = useTheme();
  const [reportType, setReportType] = useState('inventory');
  const [dateRange, setDateRange] = useState('month');
  const [isGenerating, setIsGenerating] = useState(false);

  const reportTypes = [
    { id: 'inventory', name: 'Inventory Report', description: 'Complete inventory overview with stock levels' },
    { id: 'sales', name: 'Sales Report', description: 'Sales trends and revenue analysis' },
    { id: 'lowstock', name: 'Low Stock Alert', description: 'Items that need restocking' },
    { id: 'valuation', name: 'Valuation Report', description: 'Total value of all commodities' }
  ];

  const dateRanges = [
    { id: 'week', name: 'Last Week' },
    { id: 'month', name: 'Last Month' },
    { id: 'quarter', name: 'Last Quarter' },
    { id: 'year', name: 'Last Year' }
  ];

  const handleGenerateReport = () => {
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Report generated successfully! Download will start automatically.');
    }, 2000);
  };

  const sampleReportData = {
    inventory: {
      totalItems: 156,
      totalValue: '$45,678',
      lowStockItems: 8,
      categories: 5,
      lastUpdated: '2024-01-15'
    },
    sales: {
      totalRevenue: '$12,345',
      totalSales: 89,
      averageOrderValue: '$138.72',
      topProduct: 'Laptop Computer',
      lastUpdated: '2024-01-15'
    },
    lowstock: {
      criticalItems: 3,
      warningItems: 5,
      totalValueAtRisk: '$2,456',
      recommendedOrders: 8,
      lastUpdated: '2024-01-15'
    },
    valuation: {
      totalInventoryValue: '$45,678',
      categoryBreakdown: {
        'Electronics': '$23,456',
        'Furniture': '$12,234',
        'Office Supplies': '$5,678',
        'Software': '$3,456',
        'Other': '$854'
      },
      lastUpdated: '2024-01-15'
    }
  };

  const currentReportData = sampleReportData[reportType as keyof typeof sampleReportData] as any;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pt-10 pb-8`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>
            Generate Reports
          </h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Create and download comprehensive reports for your commodity management
          </p>
        </div>

        {/* Report Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Report Type Selection */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
              <span className="mr-2">📊</span> Report Type
            </h2>
            <div className="space-y-3">
              {reportTypes.map(type => (
                <label key={type.id} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="reportType"
                    value={type.id}
                    checked={reportType === type.id}
                    onChange={(e) => setReportType(e.target.value)}
                    className="mt-1 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {type.name}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {type.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Date Range Selection */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
              <span className="mr-2">📅</span> Date Range
            </h2>
            <div className="space-y-2">
              {dateRanges.map(range => (
                <label key={range.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="dateRange"
                    value={range.id}
                    checked={dateRange === range.id}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {range.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Report Preview */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
              <span className="mr-2">📋</span> Report Preview
            </h2>
            <div className="space-y-3">
              {reportType === 'inventory' && (
                <>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Items:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.totalItems}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Value:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.totalValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Low Stock:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.lowStockItems}
                    </span>
                  </div>
                </>
              )}
              {reportType === 'sales' && (
                <>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Revenue:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.totalRevenue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Sales:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.totalSales}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Avg Order:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.averageOrderValue}
                    </span>
                  </div>
                </>
              )}
              {reportType === 'lowstock' && (
                <>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Critical Items:</span>
                    <span className={`font-medium text-red-600`}>
                      {currentReportData.criticalItems}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Warning Items:</span>
                    <span className={`font-medium text-yellow-600`}>
                      {currentReportData.warningItems}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Value at Risk:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.totalValueAtRisk}
                    </span>
                  </div>
                </>
              )}
              {reportType === 'valuation' && (
                <>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Total Value:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentReportData.totalInventoryValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Categories:</span>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {Object.keys(currentReportData.categoryBreakdown).length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isGenerating
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
            }`}
          >
            {isGenerating ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Report...
              </span>
            ) : (
              'Generate Report'
            )}
          </button>
        </div>

        {/* Recent Reports */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
            <span className="mr-2">📋</span> Recent Reports
          </h2>
          <div className="space-y-3">
            {[
              { name: 'Inventory Report', date: '2024-01-15', type: 'PDF', size: '2.3 MB' },
              { name: 'Sales Report', date: '2024-01-14', type: 'Excel', size: '1.8 MB' },
              { name: 'Low Stock Alert', date: '2024-01-13', type: 'PDF', size: '856 KB' },
              { name: 'Valuation Report', date: '2024-01-12', type: 'PDF', size: '1.2 MB' }
            ].map((report, index) => (
              <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-lg hover:-translate-y-1 hover:scale-102 transition-all duration-300 cursor-pointer`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
                    <span className="text-sm">📄</span>
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{report.name}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {report.date} • {report.type} • {report.size}
                    </p>
                  </div>
                </div>
                <button className={`px-3 py-1 text-sm rounded transition-colors ${
                  isDark 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
