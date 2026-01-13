import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className = "" }: TypographyProps) {
  return (
    <h1
      className={` text-[32px] ipad-vertical:text-[40px]  leading-[120%] font-medium ${className}`}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className = "" }: TypographyProps) {
  return (
    <h2
      className={`font-light text-2xl ipad-vertical:text-[32px]  leading-[120%] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className = "" }: TypographyProps) {
  return (
    <h3
      className={`text-3xl ipad-vertical:text-[32px] font-light leading-[120%] ${className}`}
    >
      {children}
    </h3>
  );
}

export function Heading4({ children, className = "" }: TypographyProps) {
  return (
    <h4 className={`text-2xl font-light leading-[150%] ${className}`}>
      {children}
    </h4>
  );
}

export function Heading5({ children, className = "" }: TypographyProps) {
  return (
    <h5 className={`text-[20px] font-light leading-[140%] ${className}`}>
      {children}
    </h5>
  );
}

export function BodySmallRegular({
  children,
  className = "",
}: TypographyProps) {
  return <p className={`text-sm leading-[155%]  ${className}`}>{children}</p>;
}

export function BodyXSmallRegular({
  children,
  className = "",
}: TypographyProps) {
  return <p className={`text-xs leading-[155%]  ${className}`}>{children}</p>;
}

export function BodyXSmallMedium({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-xs leading-[155%] font-medium  ${className}`}>
      {children}
    </p>
  );
}

export function BodySmallMedium({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-sm leading-[155%] font-medium  ${className}`}>
      {children}
    </p>
  );
}

export function BodyMediumRegular({
  children,
  className = "",
}: TypographyProps) {
  return <p className={`text-base leading-[160%]  ${className}`}>{children}</p>;
}

export function BodyMediumMedium({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-base font-medium leading-[160%]  ${className}`}>
      {children}
    </p>
  );
}

export function BodyLargeMedium({ children, className = "" }: TypographyProps) {
  return (
    <p
      className={`text-lg uppercase tracking-[2px] leading-[155%] font-medium ${className}`}
    >
      {children}
    </p>
  );
}
export function BodyLargeMedium2({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p
      className={`ipad-vertical:text-lg tracking-[2px] font-medium ${className}`}
    >
      {children}
    </p>
  );
}

export function BodyLargeRegular({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-lg font-normal leading-[155%] ${className}`}>
      {children}
    </p>
  );
}
