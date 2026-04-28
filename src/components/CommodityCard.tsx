import React from 'react';
import { Commodity } from '../types';

interface CommodityCardProps {
  commodity: Commodity;
  onRemove: (id: number) => void;
  onEdit?: (commodity: Commodity) => void;
}

const CommodityCard: React.FC<CommodityCardProps> = ({ commodity, onRemove, onEdit }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800';
      case 'INACTIVE':
        return 'bg-gray-100 text-gray-800';
      case 'LOW_STOCK':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock <= 5) return 'text-red-600 font-semibold';
    if (stock <= 20) return 'text-yellow-600 font-semibold';
    return 'text-green-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col w-full sm:w-48 md:w-52 lg:w-56 xl:w-60 h-56 sm:h-60 md:h-64 lg:h-68 xl:h-72">
      {/* Image Section */}
      <div className="relative flex-shrink-0 h-24 bg-gradient-to-br from-blue-100 to-indigo-100">
        {commodity.imageUrl ? (
          <img
            src={commodity.imageUrl}
            alt={commodity.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl">📦</span>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-1 right-1">
          <span className={`px-1 py-0.5 rounded-full text-xs font-medium ${getStatusColor(commodity.status)}`}>
            {commodity.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-2 flex flex-col overflow-hidden">
        {/* Title and Category */}
        <div className="mb-1 flex-shrink-0">
          <h3 className="text-xs font-semibold text-gray-900 leading-tight truncate" style={{ height: '16px' }}>
            {commodity.name}
          </h3>
          <p className="text-xs text-gray-500 leading-tight truncate" style={{ height: '14px' }}>
            {commodity.category}
          </p>
        </div>

        {/* Description */}
        <div className="flex-1 mb-1 overflow-hidden">
          <p className="text-xs text-gray-600 leading-tight" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '28px'
          }}>
            {commodity.description}
          </p>
        </div>

        {/* Price and Stock */}
        <div className="flex justify-between items-center mb-0.5 mt-2 flex-shrink-0">
          <div>
            <p className="text-xs font-bold text-gray-900">${commodity.price}</p>
          </div>
          <div className="text-right">
            <p className={`text-xs ${getStockStatus(commodity.stock)}`}>
              {commodity.stock}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-1 flex-shrink-0 mt-0">
          {onEdit && (
            <button
              onClick={() => onEdit(commodity)}
              className="flex-1 bg-blue-500 text-white px-1 py-0.5 rounded hover:bg-blue-600 transition-colors text-xs font-medium"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => onRemove(commodity.id)}
            className="flex-1 bg-red-500 text-white px-1 py-0.5 rounded hover:bg-red-600 transition-colors text-xs font-medium"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Low Stock Warning - Only show if space allows */}
      {commodity.stock <= 5 && (
        <div className="bg-yellow-50 border-t border-yellow-200 px-2 py-0.5 flex-shrink-0">
          <p className="text-xs text-yellow-800 font-medium leading-tight">
            ⚠️ Low stock
          </p>
        </div>
      )}
    </div>
  );
};

export default CommodityCard;
