/**
 * Common Types
 * Shared types used across the application
 */

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}

export interface SelectOption {
  label: string;
  value: string;
}
