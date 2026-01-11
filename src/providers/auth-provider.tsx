"use client";

import {
  createContext,
  useContext,
  type ReactNode,
  useCallback,
  useMemo,
} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { QUERY_KEYS } from "@/config/app.config";
import type {
  LoginCredentials,
  RegisterCredentials,
  AuthState,
} from "@/types/user.types";

/**
 * Auth Provider
 * Provides authentication context and methods
 */

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  // Get current user query
  const { data: user, isLoading } = useQuery({
    queryKey: QUERY_KEYS.AUTH.USER,
    queryFn: async () => {
      const response = await authService.getCurrentUser();
      return response.data;
    },
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem("access_token"),
    retry: false,
  });

  const isAuthenticated = useMemo(() => !!user, [user]);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.AUTH.USER });
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: authService.register,
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      await loginMutation.mutateAsync(credentials);
    },
    [loginMutation]
  );

  const register = useCallback(
    async (data: RegisterCredentials) => {
      await registerMutation.mutateAsync(data);
    },
    [registerMutation]
  );

  const logout = useCallback(async () => {
    await logoutMutation.mutateAsync();
  }, [logoutMutation]);

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
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
