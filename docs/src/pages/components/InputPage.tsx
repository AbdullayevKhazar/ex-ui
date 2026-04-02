import { Input } from "@khazarabdulayev/ex-ui";

export function InputPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Input</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Label, xəta, köməkçi mətn, ikonlar və parol görünüşü dəstəyi.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nümunələr</h2>
        <div className="max-w-md space-y-4">
          <Input label="Email" placeholder="email@example.com" />
          <Input label="Parol" type="password" placeholder="••••••••" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">İstifadə</h2>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>{`<Input label="Email" placeholder="you@example.com" />
<Input label="Parol" type="password" error="Yanlış parol" />
<Input variant="filled" inputSize="lg" />`}</code>
        </pre>
      </section>
    </div>
  );
}
