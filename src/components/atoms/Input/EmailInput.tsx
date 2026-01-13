"use client";
import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "../Icon";
import { BodySmallMedium } from "../Text";

/**
 * EmailInput Component - Atom
 * Email input field with mail icon prefix
 */

interface ILoginInput {
  email: string;
  password: string;
}

export interface EmailInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  helperText?: string;
  className?: string;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
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
          <Icon
            name="mail-line"
            size="lg"
            className="text-placeholder dark:text-placeholder-dark"
          />
          <input
            onFocus={() => setIsfocus(true)}
            onBlur={() => setIsfocus(false)}
            type="email"
            ref={ref}
            id={inputId}
            placeholder={helperText}
            className={cn(
              " w-full border-none focus:outline-0 text-base",
              "text-text placeholder:text-placeholder",
              "dark:text-text-dark dark:placeholder:text-placeholder-dark"
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

EmailInput.displayName = "EmailInput";

export { EmailInput };
