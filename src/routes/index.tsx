import { createBrowserRouter, RouteObject } from 'react-router-dom'
// import { lazy } from 'react'

// Pages
import NotFound from '../pages/NotFound'

// Error boundary
import ErrorBoundary from '../components/ErrorBoundary'

// Feature routes
import dashboardRoutes from './dashboardRoutes'
import landingRoutes from './landingPageRoutes'
import authRoutes from './authRoutes'

// Route definitions
const routes: RouteObject[] = [
  // Feature-specific routes with their own layouts
  // Landing feature routes (path: /)
  landingRoutes,
  
  // Dashboard feature routes (path: /dashboard)
  dashboardRoutes,
  
  // Auth feature routes (path: /auth)
  authRoutes,
  
  // Global error page
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  },
]

// Create and export the router instance
const router = createBrowserRouter(routes)

export default router 