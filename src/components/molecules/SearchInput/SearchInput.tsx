"use client";
import { forwardRef, type InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/atoms/Input";

/**
 * SearchInput Component - Molecule
 * A search input component with icon and clear button
 */

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onSearch?: (value: string) => void;
  onClear?: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onSearch, onClear, onChange, value, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState("");
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(currentValue as string);
      }
    };

    const handleClear = () => {
      setInternalValue("");
      onClear?.();
    };

    return (
      <div className={cn("relative", className)}>
        <Input
          ref={ref}
          type="search"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          leftIcon={<i className="ri-search-line" />}
          rightIcon={
            currentValue ? (
              <button
                type="button"
                onClick={handleClear}
                className="hover:text-gray-700 dark:hover:text-gray-300"
              >
                <i className="ri-close-line" />
              </button>
            ) : undefined
          }
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
