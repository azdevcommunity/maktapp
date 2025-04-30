import { ReactNode } from 'react';
import { useAutoLogin } from '@/api/hooks';

interface AutoLoginProviderProps {
  children: ReactNode;
}

/**
 * Component that provides automatic login functionality
 * Fetch user profile if a token exists in localStorage
 */
const AutoLoginProvider = ({ children }: AutoLoginProviderProps) => {
  // Use the hook to automatically fetch user profile if token exists
  useAutoLogin();
  
  // Simply render children, this component just triggers the auto-login effect
  return <>{children}</>;
};

export default AutoLoginProvider; 