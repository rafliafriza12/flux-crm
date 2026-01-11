import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Text Component - Atom
 * Typography component for consistent text styling
 */

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      body: "text-base leading-7",
      small: "text-sm leading-6",
      muted: "text-sm text-gray-500 dark:text-gray-400",
      lead: "text-xl text-gray-600 dark:text-gray-400",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "normal",
    align: "left",
  },
});

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: TextElement;
}

function Text({
  className,
  variant,
  weight,
  align,
  as: Component = "p",
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ variant, weight, align, className }))}
      {...props}
    />
  );
}

export { Text, textVariants };
