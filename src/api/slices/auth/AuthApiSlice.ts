import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, endpoints } from '@/api/config';
import { LoginRequest, LoginResponse } from '@/api/models/AuthApiModel';

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_BASE_URL,
    fetchFn: (input, init) => {
      return fetch(input, {
        ...init,
        mode: 'cors',
        credentials: 'include',
      });
    },
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth?.token;
      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      
      headers.set('Content-Type', 'application/json');
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