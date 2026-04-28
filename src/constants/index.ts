export const APP_CONFIG = {
  name: 'Commodities Management System',
  version: '1.0.0',
  description: 'A comprehensive React.js application for managing commodities with role-based access control'
} as const;

export const ROLES = {
  MANAGER: 'MANAGER' as const,
  STORE_KEEPER: 'STORE_KEEPER' as const
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

export const COMMODITY_STATUS = {
  ACTIVE: 'ACTIVE' as const,
  INACTIVE: 'INACTIVE' as const,
  LOW_STOCK: 'LOW_STOCK' as const
} as const;

export type CommodityStatus = typeof COMMODITY_STATUS[keyof typeof COMMODITY_STATUS];

export const CATEGORIES = [
  'Electronics',
  'Furniture',
  'Office Supplies',
  'Software',
  'Other'
] as const;

export const PAGINATION = {
  ITEMS_PER_PAGE: 10,
  DEFAULT_PAGE: 1
} as const;

export const THEME = {
  STORAGE_KEY: 'theme',
  LIGHT: 'light' as const,
  DARK: 'dark' as const
} as const;

export const AUTH = {
  STORAGE_KEY: 'user',
  SESSION_TIMEOUT_MINUTES: 30
} as const;

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  COMMODITIES: '/commodities',
  ADD_COMMODITY: '/add-commodity',
  GENERATE_REPORT: '/generate-report',
  VIEW_ALERTS: '/view-alerts',
  SETTINGS: '/settings'
} as const;

export const ALERT_TYPES = {
  CRITICAL: 'critical' as const,
  WARNING: 'warning' as const,
  INFO: 'info' as const
} as const;

export type AlertType = typeof ALERT_TYPES[keyof typeof ALERT_TYPES];

export const REPORT_TYPES = [
  'inventory',
  'sales',
  'lowstock',
  'valuation'
] as const;

export const NOTIFICATION_TYPES = {
  EMAIL: 'email' as const,
  PUSH: 'push' as const,
  SMS: 'sms' as const,
  DESKTOP: 'desktop' as const
} as const;
