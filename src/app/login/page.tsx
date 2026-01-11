"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { LoginForm } from "@/components/organisms/LoginForm";
import { ROUTES } from "@/config/app.config";
import { useAuth } from "@/providers/auth-provider";

/**
 * Login Page
 */

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    setError("");
    setIsLoading(true);

    try {
      await login(data);
      router.push(ROUTES.DASHBOARD);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to your account to continue"
    >
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Don&apos;t have an account?{" "}
        <Link
          href={ROUTES.REGISTER}
          className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
}
