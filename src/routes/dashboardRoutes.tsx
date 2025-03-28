import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

// Eager loaded component
import DashboardOverview from '../pages/dashboard/overview';

// Loading component
const Loading = () => <div className="flex justify-center items-center h-64">Loading...</div>;

// Lazy loaded components
const DashboardSettings = lazy(() => import('../pages/dashboard/settings'));

// Dashboard routes - this is a top-level route
const dashboardRoutes: RouteObject = {
  path: 'dashboard',
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <DashboardOverview />,
    },
    {
      path: 'settings',
      element: (
        <Suspense fallback={<Loading />}>
          <DashboardSettings />
        </Suspense>
      ),
    },
    // Example of using the createLazyRoute utility for future routes
    // createLazyRoute({
    //   path: 'reports',
    //   componentImport: () => import('../pages/dashboard/reports'),
    // }),
  ],
};

export default dashboardRoutes; 