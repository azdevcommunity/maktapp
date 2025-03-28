/**
 * This file is an example to show how to add new routes to the existing router
 * This is not meant to be imported into your application, but rather serves as a template
 */

// import { RouteObject } from 'react-router-dom';
// import { createLazyRoute, extendRouteChildren } from './routeUtils';

// Example 1: Adding a simple route to the main router
// -----------------------------------------------------
// 1. Create your component in src/pages/newPage/index.tsx
// 2. Import and add it to the routes array in src/routes/index.tsx

// Example 2: Adding a new feature module
// -----------------------------------------------------
// 1. Create a feature routes file (e.g., src/routes/featureRoutes.tsx)
// 2. Define your routes in that file
// 3. Import and add it to the main router in src/routes/index.tsx

// Example 3: Using the utility function for lazy loading
// -----------------------------------------------------
// In a real file, you would have the actual import path
// const newLazyRoute = createLazyRoute({
//   path: 'new-path',
//   componentImport: () => import('../pages/newFeature'),
// });

// Example 4: Extending an existing route with new children
// -----------------------------------------------------
// This is useful for plugins or feature modules
// const ExampleComponent = () => <div>Example Component</div>;

// const existingRoute: RouteObject = {
//   path: '/dashboard',
//   element: <ExampleComponent />,
//   children: [
//     { path: 'overview', element: <ExampleComponent /> }
//   ]
// };

// New route to add
// const newChildRoute: RouteObject = {
//   path: 'new-feature',
//   element: <ExampleComponent />
// };

// Extend the existing route
// const extendedRoute = extendRouteChildren(existingRoute, [newChildRoute]);

/**
 * Best practices for route organization:
 * 
 * 1. Group related routes into feature modules
 * 2. Use lazy loading for routes that aren't needed on initial load
 * 3. Keep the main router file clean by importing feature route modules
 * 4. Use index routes (index: true) for default child routes
 * 5. Place the catch-all 404 route as the last route in the array
 * 6. Use nested routes for layouts with common UI elements
 */

// This example file doesn't export anything, it's just for demonstration
export {}; 