import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Simple header for auth pages */}
      <header className="py-4 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            makt'app
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/auth/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="text-blue-600 hover:underline">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Auth pages content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Simple footer */}
      <footer className="py-4 border-t bg-white">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 makt'app. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout; 