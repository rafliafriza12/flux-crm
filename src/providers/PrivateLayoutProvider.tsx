"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./auth-provider";

const PrivateLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user?.id) {
      router.replace("/login");
    }
  }, [user?.id, isLoading, router]);

  // Show loading while checking auth status

  // If user is not logged in, don't render private pages
  if (!user?.id) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateLayoutProvider;
