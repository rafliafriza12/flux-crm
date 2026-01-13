import Cookies from "js-cookie";
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
  AuthTokens,
} from "@/types/user.types";

/**
 * Dummy Auth Service
 * Handles authentication without hitting real API
 * Stores user data in cookies
 */

// Response types
interface AuthResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

// Cookie keys
const COOKIE_KEYS = {
  ACCESS_TOKEN: "flux_access_token",
  REFRESH_TOKEN: "flux_refresh_token",
  USER: "flux_user",
} as const;

// Cookie options
const COOKIE_OPTIONS: Cookies.CookieAttributes = {
  expires: 7, // 7 days
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

// Dummy users database (for simulation)
const DUMMY_USERS: (User & { password: string })[] = [
  {
    id: "1",
    email: "admin@fluxcrm.com",
    password: "admin123",
    name: "Admin User",
    avatar: "/avatar/1.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    email: "user@fluxcrm.com",
    password: "user123",
    name: "Regular User",
    avatar: "/avatar/2.jpg",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Helper to generate dummy token
const generateToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Helper to simulate API delay
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const dummyAuthService = {
  /**
   * Login user (dummy)
   */
  login: async (
    credentials: LoginCredentials
  ): Promise<AuthResponse<{ user: User; tokens: AuthTokens }>> => {
    await delay(800); // Simulate network delay

    const user = DUMMY_USERS.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
        data: null,
      };
    }

    // Generate tokens
    const tokens: AuthTokens = {
      accessToken: generateToken(),
      refreshToken: generateToken(),
    };

    // Create user without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pwd, ...userWithoutPassword } = user;

    // Store in cookies
    Cookies.set(COOKIE_KEYS.ACCESS_TOKEN, tokens.accessToken, COOKIE_OPTIONS);
    Cookies.set(COOKIE_KEYS.REFRESH_TOKEN, tokens.refreshToken, COOKIE_OPTIONS);
    Cookies.set(
      COOKIE_KEYS.USER,
      JSON.stringify(userWithoutPassword),
      COOKIE_OPTIONS
    );

    return {
      success: true,
      message: "Login successful",
      data: {
        user: userWithoutPassword,
        tokens,
      },
    };
  },

  /**
   * Register new user (dummy)
   */
  register: async (data: RegisterCredentials): Promise<AuthResponse<User>> => {
    await delay(800); // Simulate network delay

    // Check if email already exists
    const existingUser = DUMMY_USERS.find((u) => u.email === data.email);
    if (existingUser) {
      return {
        success: false,
        message: "Email already registered",
        data: null,
      };
    }

    // Create new user
    const newUser: User = {
      id: String(DUMMY_USERS.length + 1),
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      avatar: `/avatar/${(DUMMY_USERS.length % 5) + 1}.jpg`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Add to dummy database (in-memory only)
    DUMMY_USERS.push({ ...newUser, password: data.password });

    return {
      success: true,
      message: "Registration successful",
      data: newUser,
    };
  },

  /**
   * Logout user
   */
  logout: async (): Promise<AuthResponse<null>> => {
    await delay(300);

    // Remove cookies
    Cookies.remove(COOKIE_KEYS.ACCESS_TOKEN);
    Cookies.remove(COOKIE_KEYS.REFRESH_TOKEN);
    Cookies.remove(COOKIE_KEYS.USER);

    return {
      success: true,
      message: "Logged out successfully",
      data: null,
    };
  },

  /**
   * Get current user from cookies
   */
  getCurrentUser: (): User | null => {
    const userCookie = Cookies.get(COOKIE_KEYS.USER);
    if (!userCookie) return null;

    try {
      return JSON.parse(userCookie) as User;
    } catch {
      return null;
    }
  },

  /**
   * Get access token from cookies
   */
  getAccessToken: (): string | null => {
    return Cookies.get(COOKIE_KEYS.ACCESS_TOKEN) || null;
  },

  /**
   * Get refresh token from cookies
   */
  getRefreshToken: (): string | null => {
    return Cookies.get(COOKIE_KEYS.REFRESH_TOKEN) || null;
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!Cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
  },

  /**
   * Refresh tokens (dummy)
   */
  refreshTokens: async (): Promise<AuthResponse<AuthTokens>> => {
    await delay(500);

    const currentRefreshToken = Cookies.get(COOKIE_KEYS.REFRESH_TOKEN);
    if (!currentRefreshToken) {
      return {
        success: false,
        message: "No refresh token found",
        data: null,
      };
    }

    // Generate new tokens
    const tokens: AuthTokens = {
      accessToken: generateToken(),
      refreshToken: generateToken(),
    };

    // Update cookies
    Cookies.set(COOKIE_KEYS.ACCESS_TOKEN, tokens.accessToken, COOKIE_OPTIONS);
    Cookies.set(COOKIE_KEYS.REFRESH_TOKEN, tokens.refreshToken, COOKIE_OPTIONS);

    return {
      success: true,
      message: "Tokens refreshed",
      data: tokens,
    };
  },

  /**
   * Update user in cookies
   */
  updateUser: (user: Partial<User>): User | null => {
    const currentUser = dummyAuthService.getCurrentUser();
    if (!currentUser) return null;

    const updatedUser: User = {
      ...currentUser,
      ...user,
      updatedAt: new Date().toISOString(),
    };

    Cookies.set(COOKIE_KEYS.USER, JSON.stringify(updatedUser), COOKIE_OPTIONS);

    return updatedUser;
  },
};

// Export cookie keys for external use if needed
export { COOKIE_KEYS };
