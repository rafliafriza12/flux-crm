import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { BodyMediumRegular, BodySmallRegular } from "../Text";

/**
 * Button Component - Atom
 * A versatile button component with multiple variants and sizes
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:text-placeholder dark:disabled:text-placeholder-dark dark:disabled:bg-foreground-dark disabled:bg-foreground py-3 px-4 text-black",
  {
    variants: {
      variant: {
        primary: "bg-primary ",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
        outline:
          "border border-border dark:border-border-dark bg-background dark:bg-[#0D0D12] rounded-full shadow-[0px_1px_2px_#0D0D120F]",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
        danger:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        success:
          "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600",
        liner: "border border rounded-full p-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      isLoading,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* {isLoading ? <i className="ri-loader-4-line animate-spin" /> : leftIcon} */}
        {children}
        {/* {!isLoading && rightIcon} */}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
