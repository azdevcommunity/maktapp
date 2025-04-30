import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse, AuthState, UserProfile } from '@/api/models/AuthApiModel';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = action.payload.accessToken;
      // We'll fetch complete profile data separately
      
      localStorage.setItem('token', action.payload.accessToken);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    profileSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    profileFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      localStorage.removeItem('token');
    },
  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  profileSuccess, 
  profileFailure, 
  logout 
} = authSlice.actions;
export default authSlice.reducer; 