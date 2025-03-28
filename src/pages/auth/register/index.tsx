import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="John"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        
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
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="••••••••"
            required
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 border rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 text-sm">
            I agree to the{' '}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms and Conditions
            </Link>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>
      
      <p className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register; 