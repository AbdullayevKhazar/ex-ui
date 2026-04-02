export function Installation() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Quraşdırma</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Paketi yükləyin</h2>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>npm i @khazarabdulayev/ex-ui</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. CSS faylını əlavə edin</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          App-in giriş faylında (məs. main.tsx və ya App.tsx) CSS-i import edin:
        </p>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>{`import "@khazarabdulayev/ex-ui/style.css";`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. İstifadə edin</h2>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>{`import { Button } from "@khazarabdulayev/ex-ui";

export default function App() {
  return <Button>Salam</Button>;
}`}</code>
        </pre>
      </section>
    </div>
  );
}
