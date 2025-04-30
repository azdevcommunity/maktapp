import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/auth/AuthSlice';
import { authApiSlice } from './slices/auth/AuthApiSlice';

// Configure persistence for auth reducer
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token', 'isAuthenticated'] // Only persist these fields
};

// Create a persisted reducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

/**
 * Root Redux store configuration
 * Combines all reducers and middleware
 */
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
        ignoredPaths: ['register'], // Ignore paths that might have non-serializable values
      },
    }).concat(authApiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Create persistor
export const persistor = persistStore(store);

// Export types for store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Set up listeners for RTKQ
setupListeners(store.dispatch);