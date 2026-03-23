import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getSystemTheme = (): ResolvedTheme =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "ex-ui-theme",
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme | null;
      return savedTheme ?? defaultTheme;
    } catch {
      return defaultTheme;
    }
  });
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    const activeTheme = theme === "system" ? getSystemTheme() : theme;
    return activeTheme;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextTheme: Theme) => {
      const activeTheme = nextTheme === "system" ? getSystemTheme() : nextTheme;
      setResolvedTheme(activeTheme);
      document.documentElement.classList.toggle("dark", activeTheme === "dark");
    };

    applyTheme(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Ignore storage failures (private mode, blocked storage, etc.)
    }

    const handleSystemChange = () => {
      if (theme === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme, storageKey]);

  const setTheme = (nextTheme: Theme) => setThemeState(nextTheme);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const activeTheme = prev === "system" ? getSystemTheme() : prev;
      return activeTheme === "dark" ? "light" : "dark";
    });
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
};
