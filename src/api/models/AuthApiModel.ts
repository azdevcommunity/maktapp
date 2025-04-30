export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  username: string;
  roles: string[];
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    username: string;
    email?: string;
    role: string;
  };
}

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
} 