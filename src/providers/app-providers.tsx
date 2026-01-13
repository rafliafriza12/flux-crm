"use client";

import { type ReactNode } from "react";
import { QueryProvider } from "./query-provider";
import { AuthProvider } from "./auth-provider";
import { LenisProvider } from "./lenis-provider";
import NextTopLoader from "nextjs-toploader";

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
      <AuthProvider>
        <LenisProvider>
          <NextTopLoader
            color="#9fe870"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #8B5CF6,0 0 5px #8B5CF6"
          />
          {children}
        </LenisProvider>
      </AuthProvider>
    </QueryProvider>
  );
}
