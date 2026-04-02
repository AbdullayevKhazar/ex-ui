export function Theming() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Tema (Dark / Light)</h1>
      <p className="text-gray-600 dark:text-gray-400">
        ThemeProvider ilə qaranlıq və işıqlı rejim dəstəyi.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tətbiqi əhatə edin</h2>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>{`import { ThemeProvider, ThemeToggle } from "@khazarabdulayev/ex-ui";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
      {/* Tətbiqiniz */}
    </ThemeProvider>
  );
}`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">useTheme hook</h2>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>{`import { useTheme } from "@khazarabdulayev/ex-ui";

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Dəyiş</button>;
}`}</code>
        </pre>
      </section>
    </div>
  );
}
