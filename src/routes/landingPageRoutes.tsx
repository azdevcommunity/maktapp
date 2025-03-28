import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import LandingPageLayout from '../layouts/LandingPageLayout';

// Eager loaded component
import Home from '@/pages/landing/home';
import Contact from '@/pages/landing/contact';

// Lazy loaded components
const Roles = lazy(() => import('@/pages/landing/roles'));
// const About = lazy(() => import('../pages/about'));

// Loading component
const Loading = () => <div className="flex justify-center items-center h-64">Loading...</div>;

// Landing page routes - this is a top-level route
const landingRoutes: RouteObject = {
  path: '/',
  element: <LandingPageLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'roles',
      element: (
        <Suspense fallback={<Loading />}>
          <Roles />
        </Suspense>
      ),
    },
    {
      path: 'contact',
      element: (
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      ),
    },
  ],
};

export default landingRoutes; 