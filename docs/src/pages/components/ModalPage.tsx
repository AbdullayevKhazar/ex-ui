import { Button, Modal } from "@khazarabdulayev/ex-ui";
import { useState } from "react";

export function ModalPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Modal</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Mərkəzləşdirilmiş overlay, ESC ilə bağlama.
      </p>
      <Button onClick={() => setOpen(true)}>Modalı aç</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Nümunə Modal">
        <p className="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum
          error doloremque quis dolores a at consequatur placeat aut, molestias
          vitae. Cupiditate magni necessitatibus vel delectus? Quod dicta
          impedit temporibus.
        </p>
      </Modal>
      <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
        <code>{`const [open, setOpen] = useState(false);
<Modal isOpen={open} onClose={() => setOpen(false)} title="Başlıq">
  <p>Məzmun</p>
</Modal>`}</code>
      </pre>
    </div>
  );
}
