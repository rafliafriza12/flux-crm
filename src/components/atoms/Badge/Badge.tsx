import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge Component - Atom
 * A small label component for status indicators
 */

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        secondary:
          "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        success:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        warning:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        outline: "border border-gray-300 bg-transparent dark:border-gray-700",
      },
      size: {
        xs: "px-1.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
