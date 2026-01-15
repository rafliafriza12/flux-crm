import { cn } from "@/lib";
import { Icon } from "../Icon";
import { BodyMediumMedium } from "../Text";
import { cva, type VariantProps } from "class-variance-authority";
import {
  type ButtonHTMLAttributes,
  forwardRef,
  useState,
  useRef,
  useEffect,
} from "react";

const buttonVariants = cva(
  "h-full px-6 rounded-full flex items-center justify-center gap-2.5 relative select-none",
  {
    variants: {
      variant: {
        primary: "bg-[#204E4D]",
        secondary: "bg-foreground dark:bg-foreground-dark",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface DropdownButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  defaultOption: string;
  options: string[];
  className?: string;
  onValueChange?: (value: string) => void;
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  (
    {
      variant = "secondary",
      defaultOption,
      options,
      className,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultOption);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value: string) => {
      setSelected(value);
      setIsOpen(false);
      onValueChange?.(value);
    };

    return (
      <div ref={containerRef} className="relative inline-block h-full">
        {/* Trigger Button */}
        <button
          type="button"
          ref={ref}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(buttonVariants({ variant }), className)}
          {...props}
        >
          <BodyMediumMedium>{selected}</BodyMediumMedium>
          <Icon
            name="arrow-down-s-line"
            size="xl"
            className={cn(
              "text-2xl transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-3 min-w-40 rounded-[20px] border border-border dark:border-border-dark bg-background dark:bg-background-dark p-2 flex flex-col gap-1 z-50 shadow-lg">
            {options.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleSelect(item)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-xl transition",
                  "hover:bg-muted dark:hover:bg-muted-dark",
                  item === selected && "bg-muted dark:bg-muted-dark font-medium"
                )}
              >
                <BodyMediumMedium className="text-nowrap">
                  {item}
                </BodyMediumMedium>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

DropdownButton.displayName = "DropdownButton";

export { DropdownButton, buttonVariants };
