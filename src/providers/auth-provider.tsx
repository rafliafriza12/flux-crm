"use client";

import {
  createContext,
  useContext,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { dummyAuthService } from "@/services/dummy-auth.service";
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
} from "@/types/user.types";

/**
 * Auth Provider
 * Provides authentication context and methods using dummy service
 */

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    credentials: LoginCredentials
  ) => Promise<{ success: boolean; message: string }>;
  register: (
    data: RegisterCredentials & { firstName?: string; lastName?: string }
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const currentUser = dummyAuthService.getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const result = await dummyAuthService.login(credentials);
      if (result.success && result.data) {
        setUser(result.data.user);
      }
      return { success: result.success, message: result.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (
      data: RegisterCredentials & { firstName?: string; lastName?: string }
    ) => {
      setIsLoading(true);
      try {
        const result = await dummyAuthService.register(data);
        return { success: result.success, message: result.message };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await dummyAuthService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
