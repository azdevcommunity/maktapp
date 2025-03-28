import { RouteObject } from 'react-router-dom'
import { lazy, ComponentType, Suspense, ReactNode, ReactElement } from 'react'

// Default loading component
const DefaultLoading = () => <div className="flex justify-center items-center h-64">Loading...</div>

// Type for the parameters needed to create a lazy-loaded route
interface LazyRouteProps {
  path: string
  componentImport: () => Promise<{ default: ComponentType<any> }>
  loading?: ReactNode
}

/**
 * Creates a lazy-loaded route with suspense
 * @param path - The route path
 * @param componentImport - Import function for the component
 * @param loading - Optional custom loading component
 * @returns RouteObject for the lazy route
 */
export const createLazyRoute = ({
  path,
  componentImport,
  loading = <DefaultLoading />,
}: LazyRouteProps): RouteObject => {
  const LazyComponent = lazy(componentImport)
  
  return {
    path,
    element: (
      <Suspense fallback={loading}>
        <LazyComponent />
      </Suspense>
    ),
  }
}

/**
 * Add new routes to parent route's children
 * @param parentRoute - The parent route to extend
 * @param newRoutes - Array of new routes to add
 * @returns Updated parent route with new children
 */
export const extendRouteChildren = (
  parentRoute: RouteObject, 
  newRoutes: RouteObject[]
): RouteObject => {
  // Handle index routes to avoid type conflicts
  const parentChildren = parentRoute.children || [];
  
  return {
    ...parentRoute,
    children: [...parentChildren, ...newRoutes],
  } as RouteObject;
}

/**
 * Creates a feature route module that can be easily added to the main router
 * @param routes - Array of routes for this feature
 * @returns Feature module routes
 */
export const createFeatureRoutes = (routes: RouteObject[]): RouteObject[] => {
  return routes
}

// Interface for creating a feature module with its own layout
interface FeatureModuleProps {
  // The base path for this feature (e.g., 'dashboard', 'auth', etc.)
  basePath: string;
  // The layout component that wraps all routes in this feature
  layout: ReactElement;
  // The routes to include in this feature
  routes: {
    // For the index route (if any)
    index?: {
      element: ReactElement;
      lazy?: boolean;
    };
    // Child routes with their own paths
    children: Array<{
      path: string;
      element: ReactElement | (() => Promise<{ default: ComponentType<any> }>);
      lazy?: boolean;
    }>;
  };
  // Optional error element for this feature
  errorElement?: ReactElement;
}

/**
 * Creates a complete feature module with its own layout
 * @param props - The feature module configuration
 * @returns A route object that can be added to the main router
 */
export const createFeatureModule = ({
  basePath,
  layout,
  routes,
  errorElement,
}: FeatureModuleProps): RouteObject => {
  // Create the children routes
  const children: RouteObject[] = [];
  
  // Add the index route if provided
  if (routes.index) {
    children.push({
      index: true,
      element: routes.index.lazy ? (
        <Suspense fallback={<DefaultLoading />}>
          {routes.index.element}
        </Suspense>
      ) : routes.index.element,
    });
  }
  
  // Add the child routes
  routes.children.forEach((route) => {
    // Handle lazy loading if needed
    if (typeof route.element === 'function') {
      const LazyComponent = lazy(route.element);
      children.push({
        path: route.path,
        element: (
          <Suspense fallback={<DefaultLoading />}>
            <LazyComponent />
          </Suspense>
        ),
      });
    } else if (route.lazy) {
      children.push({
        path: route.path,
        element: (
          <Suspense fallback={<DefaultLoading />}>
            {route.element}
          </Suspense>
        ),
      });
    } else {
      children.push({
        path: route.path,
        element: route.element,
      });
    }
  });
  
  // Create the feature module
  return {
    path: basePath,
    element: layout,
    errorElement,
    children,
  };
} 