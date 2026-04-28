import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, UserRole } from '../context/AuthContext';

interface RouteGuardProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  requireAuth?: boolean;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ 
  children, 
  requiredRole, 
  requireAuth = true 
}) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // If authentication is required and user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If a specific role is required and user doesn't have it
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            You don't have permission to access this page.
            {requiredRole && ` Required role: ${requiredRole.replace('_', ' ')}`}
          </p>
          <p className="text-sm text-gray-500">
            Your current role: {user?.role?.replace('_', ' ')}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RouteGuard;
