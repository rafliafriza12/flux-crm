/**
 * Application Configuration
 * Central configuration for application settings
 */

export const APP_CONFIG = {
  NAME: "Gutech Boilerplate",
  DESCRIPTION: "Modern Next.js boilerplate with atomic design",
  VERSION: "1.0.0",
  AUTHOR: "Gutech Team",
} as const;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/",
  ANALYTICS: "/analytics",
  PRODUCTS: "/products",
  INVOICES: "/invoices",
  CALENDAR: "/calendar",
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

export const QUERY_KEYS = {
  AUTH: {
    USER: ["auth", "user"],
    SESSION: ["auth", "session"],
  },
  USERS: {
    LIST: ["users", "list"],
    DETAIL: (id: string) => ["users", "detail", id],
  },
} as const;
