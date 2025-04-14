import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import AuthLayout from '../layouts/auth/AuthLayout';

// Eager loaded components for critical paths
import Login from '../pages/auth/login';
import ForgotPassword from '../pages/auth/forgot-password';
import ResetPassword from '../pages/auth/reset-password';

// Loading component
const Loading = () => <div className="flex justify-center items-center h-64">Loading...</div>;

// Lazy loaded components
const Register = lazy(() => import('../pages/auth/register'));

// Auth routes - this is a top-level route with its own layout
const authRoutes: RouteObject = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'reset-password/:token',
      element: <ResetPassword />,
    },
    {
      path: 'register',
      element: (
        <Suspense fallback={<Loading />}>
          <Register />
        </Suspense>
      ),
    },
    // Redirect to login if no sub-path is specified
    {
      index: true,
      element: <Login />,
    },
  ],
};

export default authRoutes; 