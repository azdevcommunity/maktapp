export const API_BASE_URL = import.meta.env.PROFILE === 'prod' 
  ? 'https://api-demo.maktapp.az'  
  : '';

export const endpoints = {
  auth: {
    login: '/v1/auth',
  }
}; 