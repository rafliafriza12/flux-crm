import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Avatar Component - Atom
 * A component for displaying user avatars with fallback
 */

const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
        xl: "h-16 w-16 text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function Avatar({
  className,
  size = "md",
  src,
  alt,
  name,
  ...props
}: AvatarProps) {
  const pixelSize = sizeMap[size || "md"];

  return (
    <div className={cn(avatarVariants({ size, className }))} {...props}>
      {src ? (
        <Image
          src={src}
          alt={alt || name || "Avatar"}
          width={pixelSize}
          height={pixelSize}
          className="h-full w-full object-cover"
        />
      ) : name ? (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {getInitials(name)}
        </span>
      ) : (
        <i className="ri-user-line text-gray-400" />
      )}
    </div>
  );
}

export { Avatar, avatarVariants };
