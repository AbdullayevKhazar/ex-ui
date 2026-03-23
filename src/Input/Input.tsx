import React, { forwardRef, useId, useState, useRef } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "borderless";
  inputSize?: "sm" | "md" | "lg";
  // --- SEARCH FEATURES ---
  isSearchInput?: boolean;
  onAsyncSearch?: (value: string) => Promise<void>;
  debounceMs?: number;
  searchResults?: string[];
  onResultSelect?: (result: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = "default",
      inputSize = "md",
      className = "",
      disabled,
      isSearchInput,
      onAsyncSearch,
      debounceMs = 500,
      onChange,
      searchResults,
      onResultSelect,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const [isFetching, setIsFetching] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Handle Debounced Search
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);

      if (onAsyncSearch) {
        const value = e.target.value;
        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(async () => {
          if (value.trim() !== "") {
            setIsFetching(true);
            try {
              await onAsyncSearch(value);
            } catch (err) {
              console.error("Search Error:", err);
            } finally {
              setIsFetching(false);
            }
          }
        }, debounceMs);
      }
    };

    const baseClasses =
      "w-full flex items-center transition-all duration-200 outline-none";

    const variantClasses = {
      default: `border-2 rounded-lg ring-offset-2 ${
        error
          ? "border-red-500 focus-within:ring-2 focus-within:ring-red-200 dark:border-red-400 dark:focus-within:ring-red-900/40"
          : "border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-gray-700 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-900/40"
      }`,
      filled: `bg-gray-100 border-2 border-transparent rounded-lg ring-offset-2 ${
        error
          ? "border-red-500 dark:border-red-400"
          : "focus-within:bg-white focus-within:border-blue-500 dark:bg-gray-800 dark:focus-within:bg-gray-900 dark:focus-within:border-blue-400"
      }`,
      borderless: `border-b-2 bg-transparent rounded-none pl-1  ${
        error
          ? "border-red-500 dark:border-red-400"
          : "border-gray-200 focus-within:border-blue-500 dark:border-gray-700 dark:focus-within:border-blue-400"
      }`,
    };

    const sizeClasses = {
      sm: "px-2 py-1.5 text-sm gap-2",
      md: "px-4 py-2.5 text-base gap-3",
      lg: "px-5 py-3.5 text-lg gap-4",
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
      <div
        className={`relative flex flex-col w-full gap-1.5 ${disabled ? "opacity-50" : ""}`}
      >
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-semibold text-gray-700 ml-1 dark:text-gray-200"
          >
            {label}
          </label>
        )}

        <div
          className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[inputSize]} ${className}`}
        >
          {leftIcon && <span className="text-gray-400 dark:text-gray-500">{leftIcon}</span>}

          <input
            id={id}
            ref={ref}
            disabled={disabled}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`flex-1 min-h-full bg-transparent outline-none border-none focus:outline-none focus:ring-0 placeholder:text-gray-400 text-gray-700 ${
              disabled ? "cursor-not-allowed" : ""
            } dark:text-gray-100 dark:placeholder:text-gray-500`}
            {...props}
            type={
              props.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : props.type
            }
          />

          {props.type === "password" && (
            <button
              type="button"
              onClick={handleClickShowPassword}
              className="text-gray-400 hover:text-gray-600 focus:outline-none transition-colors dark:text-gray-500 dark:hover:text-gray-300"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}

          {isFetching ? (
            <Loader className="animate-spin text-blue-500" size={18} />
          ) : (
            rightIcon &&
            props.type !== "password" && (
              <span className="text-gray-400 dark:text-gray-500">{rightIcon}</span>
            )
          )}
        </div>

        {error ? (
          <p className="text-xs text-red-500 dark:text-red-400 mt-1 ml-1 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-1">{helperText}</p>
        ) : null}

        {isSearchInput && isFocused && searchResults && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-full z-50 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto overflow-x-hidden dark:bg-gray-900 dark:border-gray-700">
            {searchResults.length > 0 ? (
              <ul className="flex flex-col py-1 m-0 p-0 list-none">
                {searchResults.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sm text-gray-700 dark:text-gray-200 transition-colors"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      if (onResultSelect) onResultSelect(item);
                      setIsFocused(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
