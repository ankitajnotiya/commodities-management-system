import React from 'react';
import CommodityCard from './CommodityCard';
import { Commodity } from '../types';
import { useTheme } from '../context/ThemeContext';

const CommoditiesList: React.FC = () => {
  const { isDark } = useTheme();
  
  // Sample commodity data
  const sampleCommodities: Commodity[] = [
    {
      userId: 1,
      id: 1,
      name: 'Laptop Computer',
      description: 'High-performance laptop for office work with 16GB RAM and 512GB SSD',
      category: 'Electronics',
      price: 899.99,
      stock: 15,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop'
    },
    {
      userId: 1,
      id: 2,
      name: 'Office Chair',
      description: 'Ergonomic office chair with lumbar support and adjustable height',
      category: 'Furniture',
      price: 249.99,
      stock: 8,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop'
    },
    {
      userId: 2,
      id: 3,
      name: 'USB-C Cable',
      description: 'High-speed USB-C charging cable, 2 meters length',
      category: 'Electronics',
      price: 12.99,
      stock: 3,
      status: 'LOW_STOCK',
      imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=200&fit=crop'
    },
    {
      userId: 2,
      id: 4,
      name: 'Standing Desk',
      description: 'Adjustable height standing desk with electric motor',
      category: 'Furniture',
      price: 599.99,
      stock: 5,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop'
    },
    {
      userId: 3,
      id: 5,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      category: 'Electronics',
      price: 29.99,
      stock: 25,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd9fc90446c?w=300&h=200&fit=crop'
    },
    {
      userId: 3,
      id: 6,
      name: 'Monitor Stand',
      description: 'Adjustable monitor stand with storage drawer',
      category: 'Furniture',
      price: 45.99,
      stock: 0,
      status: 'INACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop'
    },
    {
      userId: 4,
      id: 7,
      name: 'Keyboard',
      description: 'Mechanical keyboard with RGB backlighting',
      category: 'Electronics',
      price: 79.99,
      stock: 12,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbb6d0c5f5dc?w=300&h=200&fit=crop'
    },
    {
      userId: 4,
      id: 8,
      name: 'Desk Lamp',
      description: 'LED desk lamp with adjustable brightness',
      category: 'Furniture',
      price: 34.99,
      stock: 18,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      userId: 5,
      id: 9,
      name: 'Webcam',
      description: 'HD webcam with built-in microphone',
      category: 'Electronics',
      price: 49.99,
      stock: 2,
      status: 'LOW_STOCK',
      imageUrl: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=300&h=200&fit=crop'
    },
    {
      userId: 5,
      id: 10,
      name: 'File Cabinet',
      description: '3-drawer metal filing cabinet',
      category: 'Furniture',
      price: 129.99,
      stock: 6,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop'
    },
    {
      userId: 6,
      id: 11,
      name: 'Headphones',
      description: 'Noise-cancelling wireless headphones',
      category: 'Electronics',
      price: 199.99,
      stock: 9,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop'
    },
    {
      userId: 6,
      id: 12,
      name: 'Whiteboard',
      description: '4ft x 3ft magnetic whiteboard',
      category: 'Office Supplies',
      price: 89.99,
      stock: 4,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop'
    },
    {
      userId: 7,
      id: 13,
      name: 'Power Strip',
      description: '8-outlet surge protector power strip',
      category: 'Electronics',
      price: 24.99,
      stock: 22,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&h=200&fit=crop'
    },
    {
      userId: 7,
      id: 14,
      name: 'Bookshelf',
      description: '5-tier wooden bookshelf',
      category: 'Furniture',
      price: 149.99,
      stock: 7,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop'
    },
    {
      userId: 8,
      id: 15,
      name: 'Printer Paper',
      description: 'A4 size printer paper, 500 sheets',
      category: 'Office Supplies',
      price: 15.99,
      stock: 45,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop'
    },
    {
      userId: 8,
      id: 16,
      name: 'Coffee Maker',
      description: 'Single serve coffee maker for office',
      category: 'Other',
      price: 89.99,
      stock: 1,
      status: 'LOW_STOCK',
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop'
    },
    {
      userId: 9,
      id: 17,
      name: 'Tablet',
      description: '10-inch tablet for presentations',
      category: 'Electronics',
      price: 399.99,
      stock: 0,
      status: 'INACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop'
    },
    {
      userId: 9,
      id: 18,
      name: 'Pens Set',
      description: 'Assorted color pens set of 12',
      category: 'Office Supplies',
      price: 8.99,
      stock: 30,
      status: 'ACTIVE',
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop'
    }
  ];

  const [commodities, setCommodities] = React.useState<Commodity[]>(sampleCommodities);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [removedItems, setRemovedItems] = React.useState<number[]>([]);

  const itemsPerPage = 10; // 5 cards per row, 2 rows
  const filteredCommodities = commodities.filter(item => !removedItems.includes(item.id));
  const totalPages = Math.ceil(filteredCommodities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCommodities = filteredCommodities.slice(startIndex, endIndex);

  const handleAddNewCommodity = () => {
    const newCommodity: Commodity = {
      userId: 10,
      id: Math.max(...commodities.map(c => c.id)) + 1,
      name: 'New Product',
      description: 'Description for new product',
      category: 'Other',
      price: 99.99,
      stock: 10,
      status: 'ACTIVE',
      imageUrl: `https://images.unsplash.com/photo-${Math.random().toString(36).substring(7)}?w=300&h=200&fit=crop`
    };
    
    setCommodities([...commodities, newCommodity]);
  };

  const handleRemoveCommodity = (id: number) => {
    setRemovedItems([...removedItems, id]);
    
    // Adjust current page if necessary
    const newFilteredCommodities = commodities.filter(item => !removedItems.includes(item.id) && item.id !== id);
    const newTotalPages = Math.ceil(newFilteredCommodities.length / itemsPerPage);
    
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-6 sm:mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-4 sm:p-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>
                📦 Commodities Management
              </h1>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Manage your inventory efficiently with {filteredCommodities.length} items
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button 
                onClick={handleAddNewCommodity}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                  isDark 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}>
                ➕ Add New
              </button>
              <button className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}>
                📊 Export
              </button>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}">
            <div className="text-center">
              <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {filteredCommodities.length}
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Items</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {commodities.filter(c => c.status === 'ACTIVE').length}
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Active</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                {commodities.filter(c => c.status === 'LOW_STOCK').length}
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Low Stock</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                {commodities.filter(c => c.stock === 0).length}
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Out of Stock</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {visibleCommodities.map((commodity: Commodity) => (
            <CommodityCard
              key={commodity.id}
              commodity={commodity}
              onRemove={handleRemoveCommodity}
            />
          ))}
        </div>

        {visibleCommodities.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No commodities to display
            </p>
          </div>
        )}

        {/* Custom Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 py-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : isDark 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              ← Previous
            </button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? isDark 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-500 text-white'
                      : isDark 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : isDark 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommoditiesList;
