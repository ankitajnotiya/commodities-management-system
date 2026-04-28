# Commodities Management System

A comprehensive React.js application for managing commodities with role-based access control, built with modern technologies and best practices.

## Features

###  Authentication & Roles-Based Access
- **Login System** with role selection (Manager/Store Keeper)
- **Role-Based Access Control** - Different features for different roles
- **Protected Routes** - Dashboard access restricted to Managers only
- **Session Management** - Persistent user sessions

###  Dashboard (Manager Only)
- **Statistics Overview** - Total Items, Active Alerts, Low Stock, Total Value
- **Recent Activities** - Track all commodity operations
- **Category Breakdown** - Visual representation of inventory distribution
- **Quick Actions** - Easy access to common tasks

###  Commodity Management
- **View All Products** - Grid layout with pagination
- **Add/Edit Products** - Comprehensive forms with validation
- **Stock Management** - Real-time stock level monitoring
- **Status Tracking** - Active, Inactive, Low Stock indicators
###  UI/UX Features
- **Dark/Light Mode** - Theme switching with system preference detection
- **Responsive Design** - Works seamlessly on all devices
- **Hover Effects** - Interactive card animations
- **Modern UI** - Clean, professional interface

### Navigation
- **Role-Based Menu** - Dynamic navigation based on user role
- **Route Guards** - Automatic redirects for unauthorized access
- **Breadcrumb Support** - Easy navigation tracking

##  Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **Lucide React** - Modern icon library
- **Heroicons** - Additional icon set
- **CLSX & Tailwind Merge** - Utility class management

### Development Tools
- **Vite** - Fast build tool
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS compatibility

##  Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd commodities-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

##  Usage

### Login Process
1. Visit the application
2. Enter any email and password
3. Select your role (Manager or Store Keeper)
4. Click "Sign In"

### Role Permissions

| Feature | Manager | Store Keeper |
|---------|---------|--------------|
| Dashboard 
| View Products
| Add/Edit Products
| Generate Reports
| View Alerts
| Settings
s
### Navigation
- **Dashboard** - Overview and statistics (Manager only)
- **Commodities** - View and manage inventory
- **Add Commodity** - Create new products
- **Generate Report** - Create various reports (Manager only)
- **View Alerts** - Monitor system alerts
- **Settings** - Configure preferences

##  Customization

### Theme Configuration
The application supports both light and dark themes. Theme preference is automatically saved and restored.

### Adding New Commodities
1. Click "Add New" button in the Commodities page
2. Fill in the commodity details
3. Set status and stock levels
4. Click "Add Commodity"

### Managing Alerts
- Monitor low stock items
- Track system notifications
- Filter alerts by type and priority

## s Build & Deploy

### Build for Production
```bash
npm run build
```

