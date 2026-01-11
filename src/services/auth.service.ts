import { httpClient } from "./http-client";
import { ENDPOINTS } from "@/config/api.config";
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
  AuthTokens,
} from "@/types/user.types";
import type { ApiResponse } from "@/types/common.types";

/**
 * Auth Service
 * Handles all authentication-related API calls
 */

export const authService = {
  /**
   * Login user
   */
  login: async (
    credentials: LoginCredentials
  ): Promise<ApiResponse<AuthTokens>> => {
    const response = await httpClient.post<AuthTokens>(
      ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    // Store tokens
    if (response.success && response.data) {
      localStorage.setItem("access_token", response.data.accessToken);
      localStorage.setItem("refresh_token", response.data.refreshToken);
    }

    return response;
  },

  /**
   * Register new user
   */
  register: async (data: RegisterCredentials): Promise<ApiResponse<User>> => {
    return httpClient.post<User>(ENDPOINTS.AUTH.REGISTER, data);
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    await httpClient.post(ENDPOINTS.AUTH.LOGOUT);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return httpClient.get<User>(ENDPOINTS.AUTH.ME);
  },

  /**
   * Refresh access token
   */
  refreshToken: async (): Promise<ApiResponse<AuthTokens>> => {
    const refreshToken = localStorage.getItem("refresh_token");
    return httpClient.post<AuthTokens>(ENDPOINTS.AUTH.REFRESH, {
      refreshToken,
    });
  },
};
