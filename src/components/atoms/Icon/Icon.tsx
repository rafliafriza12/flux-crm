import { cn } from "@/lib/utils";

/**
 * Icon Component - Atom
 * Wrapper for Remixicon icons with size variants
 */

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

function Icon({ name, size = "md", className, ...props }: IconProps) {
  return (
    <i className={cn(`ri-${name}`, sizeClasses[size], className)} {...props} />
  );
}

export { Icon };
