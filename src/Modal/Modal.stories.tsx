import { useState } from "react";
import { Modal } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  title: "Komponentlər/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-10 flex justify-center items-center min-h-75">
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          Modalı Aç
        </button>

        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="text-secondary/80">
            <p className="mb-4">
              Bu, standart modal nümunəsidir. Arxa fona klikləyərək və ya "Esc"
              düyməsini basaraq bağlaya bilərsiniz.
            </p>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-lg hover:bg-secondary/20 transition-colors"
              >
                Bağla
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Təsdiqlə
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Məlumat",
  },
};

export const DangerAction: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-10 flex justify-center items-center min-h-75">
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2.5 bg-danger text-white font-medium rounded-lg hover:bg-danger/90 transition-colors"
        >
          Hesabı Sil
        </button>

        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="text-secondary/80">
            <p className="mb-6">
              Diqqət! Hesabınızı silmək istədiyinizə əminsiniz? Bu əməliyyat
              geri qaytarıla bilməz və bütün məlumatlarınız silinəcək.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-lg hover:bg-secondary/20 transition-colors"
              >
                Ləğv et
              </button>
              <button
                onClick={() => {
                  alert("Hesab silindi!");
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-danger text-white font-medium rounded-lg hover:bg-danger/90 transition-colors"
              >
                Bəli, Sil
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Hesabı Sil",
  },
};

export const ScrollableContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-10 flex justify-center items-center min-h-75">
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2.5 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          Qaydalar və Şərtləri Oxu
        </button>

        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="text-secondary/80 space-y-4">
            <p>
              1. Qaydalar və Şərtlər tətbiqetməmizdən istifadə edərkən nəzərə
              almalı olduğunuz məqamları əhatə edir.
            </p>
            <p>2. Məlumatlarınızın məxfiliyi bizim üçün vacibdir...</p>
            <p>3. Üçüncü tərəf tətbiqləri ilə inteqrasiya...</p>
            <p>4. Ödəniş və geri qaytarma siyasəti...</p>
            <div className="h-40 bg-secondary/10 rounded-lg flex items-center justify-center">
              Böyük blok 1
            </div>
            <p>5. Hesabın dondurulması və silinməsi qaydaları...</p>
            <div className="h-40 bg-secondary/10 rounded-lg flex items-center justify-center">
              Böyük blok 2
            </div>
            <p>6. Məhkəmə və qanunvericilik tənzimləmələri...</p>

            <div className="flex justify-end pt-4 border-t border-secondary/20">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Oxudum və Razıyam
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Qaydalar və Şərtlər",
  },
};

// export const AlwaysOpenStatic: Story = {
//   args: {
//     isOpen: true,
//     title: "Statik Modal",
//     children: (
//       <div className="text-secondary/80 pb-4">
//         Bu modal həmişə açıqdır. Storybook Docs və ya Chromatic kimi vizual test
//         alətləri üçün çox faydalıdır. Tərkibindəki düymələr işləmir, sadəcə
//         dizaynı görmək üçündür.
//       </div>
//     ),
//   },
// };
