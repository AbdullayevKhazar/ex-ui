import { ThemeToggle } from "@khazarabdulayev/ex-ui";
import { Link, useLocation } from "react-router-dom";

const nav = [
  { href: "/", label: "Giriş" },
  { href: "/installation", label: "Quraşdırma" },
  { href: "/theming", label: "Tema" },
  {
    group: "Komponentlər",
    items: [
      { href: "/components/button", label: "Button" },
      { href: "/components/input", label: "Input" },
      { href: "/components/otp", label: "OTP" },
      { href: "/components/modal", label: "Modal" },
      { href: "/components/drawer", label: "Drawer" },
      { href: "/components/table", label: "Table" },
      { href: "/components/scroll", label: "ScrollComponent" },
      { href: "/components/accordion", label: "Accordion" },
    ],
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="text-xl font-bold text-primary">
            EX-UI
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6">
        <aside className="w-56 shrink-0 md:block">
          <nav className="sticky top-24 space-y-6">
            {nav.map((item) =>
              "group" in item ? (
                <div key={item.group}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {item.group}
                  </p>
                  <ul className="space-y-1">
                    {item.items.map((i) => (
                      <li key={i.href}>
                        <Link
                          to={i.href}
                          className={`block rounded-lg px-3 py-2 text-sm transition ${
                            location.pathname === i.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </aside>

        <main className="min-w-0 max-w-2xl mx-auto flex-1">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>{" "}
    </div>
  );
}
