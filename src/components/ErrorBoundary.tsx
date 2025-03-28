import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();
  
  let errorMessage: string;
  let errorStatus: number | null = null;
  
  if (isRouteErrorResponse(error)) {
    // Error response from React Router
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || 'Something went wrong';
  } else if (error instanceof Error) {
    // Regular JavaScript error
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    // String error
    errorMessage = error;
  } else {
    // Unknown error type
    errorMessage = 'Unknown error occurred';
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">
          {errorStatus ? `${errorStatus}` : 'Error'}
        </h1>
        <p className="text-xl mb-8">{errorMessage}</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary; 