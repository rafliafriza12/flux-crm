"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/**
 * Alert Component - Molecule
 * A component for displaying alert messages
 */

const alertVariants = cva("relative flex w-full gap-3 rounded-lg border p-4", {
  variants: {
    variant: {
      default:
        "bg-gray-50 border-gray-200 text-gray-900 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-100",
      info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-100",
      success:
        "bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-900 dark:text-green-100",
      warning:
        "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-900 dark:text-yellow-100",
      danger:
        "bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-900 dark:text-red-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconMap = {
  default: "ri-information-line",
  info: "ri-information-line",
  success: "ri-checkbox-circle-line",
  warning: "ri-alert-line",
  danger: "ri-error-warning-line",
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  onClose?: () => void;
}

function Alert({
  className,
  variant = "default",
  title,
  children,
  onClose,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <i className={cn(iconMap[variant || "default"], "text-lg mt-0.5")} />
      <div className="flex-1">
        {title && <h5 className="mb-1 font-medium">{title}</h5>}
        <div className="text-sm">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="hover:opacity-70"
          aria-label="Close alert"
        >
          <i className="ri-close-line" />
        </button>
      )}
    </div>
  );
}

export { Alert, alertVariants };
