export function ScrollPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">ScrollComponent</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Scroll 500px-dən sonra görünən "yuxarı" düyməsi.
      </p>
      <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
        <code>{`<ScrollComponent position="right">
  ↑ Yuxarı
</ScrollComponent>`}</code>
      </pre>
    </div>
  );
}
