/**
 * Component Types
 * Types for UI components
 */

import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseComponentProps {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  padding?: Size;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: Size;
}

export interface BadgeProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: Size;
  className?: string;
}

export interface IconProps {
  name: string;
  size?: Size;
  className?: string;
}
