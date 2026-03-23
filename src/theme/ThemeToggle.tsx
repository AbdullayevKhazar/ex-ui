import { Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "./theme";

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  lightLabel?: string;
  darkLabel?: string;
}

export const ThemeToggle = ({
  className = "",
  lightLabel = "Light mode",
  darkLabel = "Dark mode",
  ...props
}: ThemeToggleProps) => {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 rounded-xl border border-secondary/30 bg-white/90 px-4 py-2 text-sm font-semibold text-secondary shadow-sm transition hover:bg-white dark:border-secondary/40 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 ${className}`}
      aria-label="Toggle dark mode"
      {...props}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? lightLabel : darkLabel}
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";
