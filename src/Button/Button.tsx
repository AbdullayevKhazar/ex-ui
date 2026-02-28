import { Loader } from "lucide-react";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  url?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  rounded = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  url,
  ...props
}: ButtonProps) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium  transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed`;

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-gray-900 hover:bg-secondary/90",
    danger: "bg-danger text-white hover:bg-danger/90",
    outline:
      "border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600",
    link: "text-primary bg-gray-100 hover:underline  cursor-pointer",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const roundedClasses = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${roundedClasses[rounded]} ${sizeClasses[size]}  ${className}`}
      disabled={disabled || isLoading}
      onClick={url ? () => window.open(url, "_blank") : undefined}
      {...props}
    >
      {isLoading && (
        <Loader size={20} color="currentColor" className="animate-spin " />
      )}

      {!isLoading && leftIcon && <span>{leftIcon}</span>}

      {children}

      {!isLoading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
