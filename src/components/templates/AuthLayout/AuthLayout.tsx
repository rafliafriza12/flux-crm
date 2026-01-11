import { cn } from "@/lib/utils";

/**
 * AuthLayout Template
 * Centered layout for authentication pages
 */

export interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

function AuthLayout({
  children,
  title,
  description,
  className,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div
        className={cn(
          "w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900",
          className
        )}
      >
        {/* Logo */}
        <div className="flex justify-center">
          <i className="ri-code-s-slash-line text-4xl text-blue-600" />
        </div>

        {/* Title & Description */}
        {(title || description) && (
          <div className="text-center">
            {title && (
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
}

export { AuthLayout };
