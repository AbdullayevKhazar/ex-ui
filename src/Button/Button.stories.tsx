import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
const meta: Meta<typeof Button> = {
  title: "Komponentlər/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Təsdiq Et",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Sil",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Ətraflı",
    isLoading: false,
  },
};
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
export const BigButton: Story = {
  args: {
    size: "lg",
    children: "Big Button",
    color: "primary",
  },
};
export const SmallButton: Story = {
  args: {
    size: "sm",
    children: "Small Button",
    color: "primary",
  },
};
export const LoadButton: Story = {
  args: {
    variant: "primary",
    children: "Yüklənir",
    isLoading: true,
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    children: "Google-a keçid",
    url : "https://www.google.com",
  },
};
