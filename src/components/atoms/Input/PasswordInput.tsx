"use client";
import {
  Dispatch,
  forwardRef,
  SetStateAction,
  useState,
  type InputHTMLAttributes,
} from "react";
import { Icon } from "../Icon";
import { BodySmallMedium } from "../Text";
import { cn } from "@/lib";

/**
 * PasswordInput Component - Atom
 * Password input field with lock icon prefix and visibility toggle
 */
interface ILoginInput {
  email: string;
  password: string;
}

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  helperText?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const inputId =
      id || label?.toLowerCase().replace(/\s+/g, "-") || "password";

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div
        className={cn("w-full flex flex-col items-start gap-1.5", className)}
      >
        {label && (
          <label htmlFor={inputId} className="block ">
            <BodySmallMedium>{label}</BodySmallMedium>
          </label>
        )}
        <div
          className={` w-full flex justify-between border ${
            isFocus
              ? "border-primary shadow-[0px_0px_3px_#9FE87026]"
              : "border-border dark:border-border-dark"
          } rounded-full px-3 py-2 gap-2 duration-300 bg-[#F8FAFB] dark:bg-[#0D0D12]`}
        >
          <Icon
            name="lock-line"
            size="lg"
            className="text-placeholder dark:text-placeholder-dark"
          />
          <input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            type={showPassword ? "text" : "password"}
            id={inputId}
            ref={ref}
            placeholder={helperText}
            className={cn(
              " w-full border-none focus:outline-0 text-base",
              "text-text placeholder:text-placeholder",
              "dark:text-text-dark dark:placeholder:text-placeholder-dark"
            )}
            {...props}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={cn(
              "flex items-center  cursor-pointer transition-colors",
              "text-placeholder dark:text-placeholder-dark"
            )}
            tabIndex={-1}
          >
            <Icon name={showPassword ? "eye-line" : "eye-off-line"} size="lg" />
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
