import type { Meta, StoryObj } from "@storybook/react";
import { ArrowUp } from "lucide-react";
import { ScrollComponent } from "./ScrollComponent";

const meta: Meta<typeof ScrollComponent> = {
  title: "Komponentlər/ScrollComponent",
  component: ScrollComponent,
  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <div style={{ height: "20vh", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    textSize: {
      control: { type: "number" },
      description: "Size of the button text",
    },
    position: {
      control: { type: "select", options: ["right", "left"] },
      description: "Position of the scroll button on the screen",
    },
    className: {
      control: { type: "text" },
      description: "Custom CSS classes for the button",
    },
    children: {
      control: { type: "text" },
      description: "Custom content inside the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollComponent>;

export const Default: Story = {
  args: {
    textSize: 32,
    className: "bg-black text-white p-3 rounded-full shadow-lg",
    children: <ArrowUp />,
  },
};

export const CustomButton: Story = {
  args: {
    className: "bg-blue-600 text-white p-4 rounded-full shadow-xl",
    children: "Top",
  },
};

export const HighThreshold: Story = {
  args: {
    className: "bg-red-500 text-white p-3 rounded-full",
    children: "Scroll Up",
  },
};
