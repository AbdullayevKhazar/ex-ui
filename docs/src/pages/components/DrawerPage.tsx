import { Button, Drawer } from "@khazarabdulayev/ex-ui";

export function DrawerPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Drawer</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Yan panel – yuxarı, aşağı, sol və ya sağdan açılır.
      </p>
      <Drawer
        position="right"
        content={
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Panel məzmunu</h2>
            <p>Burada hər şeyi əlavə edə bilərsiniz.</p>
          </div>
        }
      >
        <Button>Drawer aç</Button>
      </Drawer>
      <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
        <code>{`<Drawer position="right" content={<div className="p-6">Məzmun</div>}>
  <Button>Drawer aç</Button>
</Drawer>`}</code>
      </pre>
    </div>
  );
}
