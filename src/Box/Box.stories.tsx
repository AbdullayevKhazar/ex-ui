import type { Meta, StoryObj } from "@storybook/react";
import { ProductBox } from "./Box";

const meta: Meta<typeof ProductBox> = {
  title: "Komponentlər/ProductBox",
  component: ProductBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductBox>;

export const Default: Story = {
  args: {
    title: "Klassik Ağ Keta",
    description:
      "Gündəlik istifadə üçün çox rahat və dözümlü idman ayaqqabısı.",
    price: "45.00 ₼",
    imageSrc:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
    imageAlt: "Ağ Keta",
  },
};

export const WithDiscountAndBadge: Story = {
  args: {
    title: "Premium Qulaqlıq",
    description: "Aktiv səs-küy ləğvetmə (ANC) xüsusiyyətli simsiz qulaqlıq.",
    price: "120.00 ₼",
    oldPrice: "180.00 ₼",
    badge: "Yeni",
    buttonText: "Səbətə əlavə et",
    imageSrc:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
};

export const Minimal: Story = {
  args: {
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    title: "Minimalist Qol Saatı",
    price: "85.00 ₼",
    badge: "Çox satılan",
    className: "h-[400px]",
    imageSrc:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    onActionClick: () => alert("Səbətə əlavə edildi!"),
  },
};
