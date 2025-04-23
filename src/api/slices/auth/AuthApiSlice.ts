import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, endpoints } from '@/api/config';
import { LoginRequest, LoginResponse } from '@/api/models/AuthApiModel';

// Determine if credentials should be 'include' (development) or 'same-origin' (production)
// Using 'include' in production can cause CORS issues when the domains differ
const credentialsMode = import.meta.env.PROD ? 'same-origin' : 'include';

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    fetchFn: (input, init) => {
      return fetch(input, {
        ...init,
        mode: 'cors',
        credentials: credentialsMode,
      });
    },
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth?.token;
      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: endpoints.auth.login,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = authApiSlice; 