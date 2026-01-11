import { httpClient } from "./http-client";
import { ENDPOINTS } from "@/config/api.config";
import type { User } from "@/types/user.types";
import type { ApiResponse, PaginationParams } from "@/types/common.types";

/**
 * User Service
 * Handles all user-related API calls
 */

export const userService = {
  /**
   * Get all users with pagination
   */
  getUsers: async (params?: PaginationParams): Promise<ApiResponse<User[]>> => {
    return httpClient.get<User[]>(ENDPOINTS.USERS.LIST, { params });
  },

  /**
   * Get user by ID
   */
  getUserById: async (id: string): Promise<ApiResponse<User>> => {
    return httpClient.get<User>(ENDPOINTS.USERS.DETAIL(id));
  },

  /**
   * Create new user
   */
  createUser: async (data: Partial<User>): Promise<ApiResponse<User>> => {
    return httpClient.post<User>(ENDPOINTS.USERS.CREATE, data);
  },

  /**
   * Update user
   */
  updateUser: async (
    id: string,
    data: Partial<User>
  ): Promise<ApiResponse<User>> => {
    return httpClient.put<User>(ENDPOINTS.USERS.UPDATE(id), data);
  },

  /**
   * Delete user
   */
  deleteUser: async (id: string): Promise<ApiResponse<void>> => {
    return httpClient.delete<void>(ENDPOINTS.USERS.DELETE(id));
  },
};
