// Use environment-specific API configuration
// In development, use empty base URL to leverage the Vite proxy
// In production, use the full API URL
export const API_BASE_URL = import.meta.env.PROD 
  ? 'https://api-demo.maktapp.az' 
  : '';

export const endpoints = {
  auth: {
    login: '/v1/auth',
  },
  user: {
    profile: '/v1/my/profile',
  }
}; 