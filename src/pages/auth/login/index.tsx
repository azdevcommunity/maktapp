import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="••••••••"
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 border rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm">
              Remember me
            </label>
          </div>
          
          <Link to="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sign in
        </button>
      </form>
      
      <p className="mt-4 text-center text-sm">
        Don't have an account?{' '}
        <Link to="/auth/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login; 