import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authApiSlice } from './slices/auth/AuthApiSlice';
import { profileSuccess, profileFailure } from './slices/auth/AuthSlice';
import { AppDispatch, RootState } from './store';

// Use throughout the app instead of plain useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Hook to automatically fetch user profile if needed
 * 
 * With redux-persist handling persistence, this hook now focuses only on
 * ensuring we have valid profile data when token exists but profile is missing
 */
export const useAutoLogin = () => {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector(state => state.auth);
  
  useEffect(() => {
    // Only fetch profile if we have a token but no user data
    if (token && !user) {
      const fetchUserProfile = async () => {
        try {
          const result = await dispatch(authApiSlice.endpoints.getProfile.initiate());
          const profileData = result.data;
          if (profileData) {
            dispatch(profileSuccess(profileData));
          }
        } catch (error) {
          dispatch(profileFailure(error instanceof Error ? error.message : 'Failed to fetch profile'));
        }
      };
      
      fetchUserProfile();
    }
  }, [token, user, dispatch]);
}; 