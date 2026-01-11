import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { QUERY_KEYS } from "@/config/app.config";
import type { User } from "@/types/user.types";
import type { ApiResponse, PaginationParams } from "@/types/common.types";

/**
 * useUsers Hook
 * Custom hook for fetching users list
 */

export function useUsers(
  params?: PaginationParams,
  options?: Omit<UseQueryOptions<ApiResponse<User[]>>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: [...QUERY_KEYS.USERS.LIST, params],
    queryFn: () => userService.getUsers(params),
    ...options,
  });
}

/**
 * useUser Hook
 * Custom hook for fetching single user by ID
 */

export function useUser(
  id: string,
  options?: Omit<UseQueryOptions<ApiResponse<User>>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: QUERY_KEYS.USERS.DETAIL(id),
    queryFn: () => userService.getUserById(id),
    enabled: !!id,
    ...options,
  });
}

/**
 * useCreateUser Hook
 * Custom hook for creating a new user
 */

export function useCreateUser(
  options?: UseMutationOptions<ApiResponse<User>, Error, Partial<User>>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS.LIST });
    },
    ...options,
  });
}

/**
 * useUpdateUser Hook
 * Custom hook for updating a user
 */

export function useUpdateUser(
  options?: UseMutationOptions<
    ApiResponse<User>,
    Error,
    { id: string; data: Partial<User> }
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => userService.updateUser(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS.LIST });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USERS.DETAIL(variables.id),
      });
    },
    ...options,
  });
}

/**
 * useDeleteUser Hook
 * Custom hook for deleting a user
 */

export function useDeleteUser(
  options?: UseMutationOptions<ApiResponse<void>, Error, string>
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS.LIST });
    },
    ...options,
  });
}
