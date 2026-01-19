"use client";
import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";
import { Icon } from "../Icon";
import { BodySmallMedium } from "../Text";

/**
 * EmailInput Component - Atom
 * Email input field with mail icon prefix
 */

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ""> {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
  icon?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, icon, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-") || "email";
    const [isFocus, setIsfocus] = useState<boolean>(false);

    return (
      <div
        className={cn("w-full flex flex-col items-start gap-1.5", className)}
      >
        {label && (
          <label htmlFor={inputId} className=" block">
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
          {(icon || leftIcon) && (
            <div className="flex items-center">
              {icon ? (
                <Icon
                  name={icon}
                  size="lg"
                  className="text-placeholder dark:text-placeholder-dark"
                />
              ) : (
                leftIcon
              )}
            </div>
          )}
          <input
            onFocus={() => setIsfocus(true)}
            onBlur={() => setIsfocus(false)}
            ref={ref}
            id={inputId}
            placeholder={helperText}
            className={cn(
              " w-full border-none focus:outline-0 text-base bg-transparent",
              "text-text placeholder:text-placeholder",
              "dark:text-text-dark dark:placeholder:text-placeholder-dark"
            )}
            {...props}
          />
          {rightIcon && (
            <div className="flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
