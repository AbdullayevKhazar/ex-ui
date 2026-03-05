import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "KOMPONENTLƏR/Drawer",
  component: Drawer,

  tags: ["autodocs"],

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Drawer komponenti səhifənin sağ və ya sol tərəfindən açılan paneldir. Adətən navigation, əlavə məlumat və ya form elementlərini göstərmək üçün istifadə olunur.",
      },
    },
  },

  argTypes: {
    position: {
      control: "radio",
      options: ["left", "right"],
      description: "Drawer-in hansı tərəfdən açılacağını təyin edir.",
    },
    width: {
      control: "text",
      description: "Drawer panelinin eni.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Səbətiniz</h2>
    <p className="text-gray-600 mb-6">
      Bu hissəyə istədiyiniz hər hansı bir React komponentini, formları və ya
      məlumatları yaza bilərsiniz.
    </p>
    <div className="space-y-4">
      <div className="h-20 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
        Məhsul 1
      </div>
      <div className="h-20 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
        Məhsul 2
      </div>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    position: "right",
    content: SampleContent,
    children: (
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
        Sağdan Aç
      </button>
    ),
  },
};

export const Left: Story = {
  args: {
    position: "left",
    content: SampleContent,
    width: "60vw",
    children: (
      <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
        Soldan Aç
      </button>
    ),
  },
};

export const Top: Story = {
  args: {
    position: "top",
    content: SampleContent,
    children: (
      <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
        Yuxarıdan Aç
      </button>
    ),
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom",
    content: SampleContent,

    children: (
      <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition">
        Aşağıdan Aç
      </button>
    ),
  },
};
