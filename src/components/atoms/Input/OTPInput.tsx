"use client";
import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  type KeyboardEvent,
  type ClipboardEvent,
  type ChangeEvent,
} from "react";
import { cn } from "@/lib/utils";

/**
 * OTPInput Component - Atom
 * A multi-digit OTP input field with auto-focus navigation
 */

export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  autoFocus?: boolean;
}

const OTPInput = forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      length = 6,
      value = "",
      onChange,
      onComplete,
      disabled = false,
      error,
      className,
      autoFocus = false,
    },
    ref
  ) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Initialize OTP from value prop
    const initialOtp = value
      .split("")
      .slice(0, length)
      .concat(Array(length).fill(""))
      .slice(0, length);

    const [otp, setOtp] = useState<string[]>(initialOtp);

    useEffect(() => {
      if (autoFocus && inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, [autoFocus]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const inputValue = e.target.value;

      // Only allow single digit
      if (inputValue.length > 1) {
        return;
      }

      // Only allow numbers
      if (inputValue && !/^\d$/.test(inputValue)) {
        return;
      }

      const newOtp = [...otp];
      newOtp[index] = inputValue;
      setOtp(newOtp);

      const otpString = newOtp.join("");
      onChange?.(otpString);

      // Move to next input if value entered
      if (inputValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Check if OTP is complete
      if (newOtp.every((digit) => digit !== "") && newOtp.length === length) {
        onComplete?.(otpString);
      }
    };

    const handleKeyDown = (
      e: KeyboardEvent<HTMLInputElement>,
      index: number
    ) => {
      // Move to previous input on backspace if current is empty
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      // Move to previous input on left arrow
      if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      }

      // Move to next input on right arrow
      if (e.key === "ArrowRight" && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, length);

      if (pastedData) {
        const newOtp = pastedData
          .split("")
          .concat(Array(length).fill(""))
          .slice(0, length);
        setOtp(newOtp);

        const otpString = newOtp.join("");
        onChange?.(otpString);

        // Focus last filled input or last input
        const lastFilledIndex = Math.min(pastedData.length - 1, length - 1);
        inputRefs.current[lastFilledIndex]?.focus();

        // Check if OTP is complete
        if (newOtp.every((digit) => digit !== "") && newOtp.length === length) {
          onComplete?.(otpString);
        }
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    };

    return (
      <div ref={ref} className={cn("w-full", className)}>
        <div className="flex items-center justify-between gap-2 ipad-vertical:gap-3">
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={otp[index] || ""}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              onFocus={handleFocus}
              disabled={disabled}
              className={cn(
                "w-12 h-12 ipad-vertical:w-20 ipad-vertical:h-12 text-center text-lg font-semibold",
                "rounded-full border bg-transparent transition-all duration-200",
                "placeholder:text-placeholder dark:placeholder:text-placeholder-dark",
                "focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "bg-[#F8FAFB] dark:bg-[#0D0D12]",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-border dark:border-border-dark"
              )}
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
        )}
      </div>
    );
  }
);

OTPInput.displayName = "OTPInput";

export { OTPInput };
