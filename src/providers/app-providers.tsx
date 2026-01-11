"use client";

import { type ReactNode } from "react";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { AuthProvider } from "./auth-provider";
import { LenisProvider } from "./lenis-provider";

/**
 * App Providers
 * Combines all providers into a single component
 */

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="system">
        <AuthProvider>
          <LenisProvider>{children}</LenisProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
