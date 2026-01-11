"use client";

import { useState, forwardRef, type InputHTMLAttributes } from "react";
import { Input } from "@/components/atoms/Input";

/**
 * PasswordInput Component - Molecule
 * An input component with show/hide password toggle
 */

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  helperText?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        ref={ref}
        type={showPassword ? "text" : "password"}
        label={label}
        error={error}
        helperText={helperText}
        className={className}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="hover:text-gray-700 dark:hover:text-gray-300"
          >
            <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} />
          </button>
        }
        {...props}
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
