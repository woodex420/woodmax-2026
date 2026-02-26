import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '@/services/api';

interface User {
  id: string;
  email: string;
  displayName?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName?: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkSession = async () => {
      const token = api.tokenManager.getToken();
      if (token) {
        try {
          const response = await api.auth.getSession();
          setUser({
            id: response.user.id,
            email: response.user.email,
            displayName: response.user.user_metadata?.display_name,
          });
        } catch (error) {
          // Token invalid, clear it
          api.tokenManager.clearToken();
        }
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.auth.login(email, password);
      api.tokenManager.setToken(response.session.access_token);
      setUser({
        id: response.user.id,
        email: response.user.email,
        displayName: response.user.user_metadata?.display_name,
      });
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email: string, password: string, displayName?: string) => {
    try {
      await api.auth.signup(email, password, displayName);
      // Auto-login after signup
      await login(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.auth.logout();
      api.tokenManager.clearToken();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local state even if API call fails
      api.tokenManager.clearToken();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
