import { Button } from "@khazarabdulayev/ex-ui";

export function ButtonPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Button</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Variantlar: primary, secondary, danger, outline. Ölçülər: sm, md, lg.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nümunələr</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">İstifadə</h2>
        <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
          <code>{`<Button variant="primary">Save</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button isLoading>Yüklənir...</Button>`}</code>
        </pre>
      </section>
    </div>
  );
}
