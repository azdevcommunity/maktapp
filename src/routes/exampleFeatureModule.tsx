/**
 * This file demonstrates how to use the createFeatureModule utility
 * It's an example and not meant to be imported into your application
 */

// import { createFeatureModule } from './routeUtils.tsx';
// import ErrorBoundary from '../components/ErrorBoundary';

// Example layout component for a feature
// const ExampleFeatureLayout = ({ children }: { children: React.ReactNode }) => (
//   <div className="feature-layout">
//     <header>Feature Header</header>
//     <main>{children}</main>
//     <footer>Feature Footer</footer>
//   </div>
// );

// Example components for the feature
// const ExampleHome = () => <div>Example Home Page</div>;
// const ExampleDetail = () => <div>Example Detail Page</div>;
// Example Settings component that would normally be imported
// const ExampleSettings = () => <div>Example Settings Page</div>;

// Create a feature module using the utility
// const exampleFeature = createFeatureModule({
//   basePath: 'example',
//   layout: <ExampleFeatureLayout>Outlet will be here</ExampleFeatureLayout>,
//   routes: {
//     // Index route (default route when navigating to /example)
//     index: {
//       element: <ExampleHome />,
//       lazy: false, // Not lazy loaded as it's the main entry point
//     },
//     // Child routes
//     children: [
//       {
//         path: 'detail/:id', // Example of a route with params
//         element: <ExampleDetail />,
//         lazy: false,
//       },
//       {
//         path: 'settings',
//         // For this example, use a component directly since the import doesn't exist
//         element: <ExampleSettings />,
//         lazy: true,
//       },
//     ],
//   },
//   // Custom error element for this feature
//   errorElement: <ErrorBoundary />,
// });

/**
 * In your main routes file, you would import and use this like:
 * 
 * import exampleFeature from './exampleFeatureModule';
 * 
 * const routes: RouteObject[] = [
 *   landingRoutes,
 *   dashboardRoutes,
 *   exampleFeature,  // <-- Add the feature module
 *   // ... other routes
 * ];
 */

// This example file doesn't export anything
export {}; 