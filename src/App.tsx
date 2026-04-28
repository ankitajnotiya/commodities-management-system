import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { useAuth } from './context/AuthContext';
import RouteGuard from './components/RouteGuard';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CommoditiesList from './components/CommoditiesList';
import AddCommodity from './components/AddCommodity';
import GenerateReport from './components/GenerateReport';
import ViewAlerts from './components/ViewAlerts';
import Settings from './components/Settings';
import About from './components/About';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <RouteGuard requireAuth={true}>
            <Navigation />
            <Navigate to="/commodities" replace />
          </RouteGuard>
        } />
        
        <Route path="/dashboard" element={
          <RouteGuard requireAuth={true} requiredRole="MANAGER">
            <Navigation />
            <Dashboard />
          </RouteGuard>
        } />
        
        <Route path="/commodities" element={
          <RouteGuard requireAuth={true}>
            <Navigation />
            <CommoditiesList />
          </RouteGuard>
        } />
        
        <Route path="/add-commodity" element={
          <RouteGuard requireAuth={true}>
            <Navigation />
            <AddCommodity />
          </RouteGuard>
        } />
        
        <Route path="/generate-report" element={
          <RouteGuard requireAuth={true} requiredRole="MANAGER">
            <Navigation />
            <GenerateReport />
          </RouteGuard>
        } />
        
        <Route path="/view-alerts" element={
          <RouteGuard requireAuth={true}>
            <Navigation />
            <ViewAlerts />
          </RouteGuard>
        } />
        
        <Route path="/settings" element={
          <RouteGuard requireAuth={true}>
            <Navigation />
            <Settings />
          </RouteGuard>
        } />
        
        <Route path="/about" element={
          <RouteGuard requireAuth={true}>
            <Navigation />
            <About />
          </RouteGuard>
        } />
        
        <Route path="*" element={
          <Navigate to={isAuthenticated ? "/commodities" : "/login"} replace />
        } />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
