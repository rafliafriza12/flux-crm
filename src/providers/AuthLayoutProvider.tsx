"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./auth-provider";

const AuthLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (!isLoading && user?.id) {
      router.replace("/");
    }
  }, [user?.id, isLoading, router]);

  // If user is logged in, don't render auth pages
  if (user?.id) {
    return null;
  }

  return <>{children}</>;
};

export default AuthLayoutProvider;
