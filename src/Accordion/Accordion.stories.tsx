import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionHeader } from "./Accordion";
import { Button } from "../Button/Button";
const meta: Meta<typeof Accordion> = {
  title: "Komponentlər/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
const items = [
  {
    header: "What is React?",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
  },
  {
    header: "What is Storybook?",
    content:
      "Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular.",
  },
  {
    header: "What is TypeScript?",
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
];
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion className="rounded-lg">
      <AccordionHeader>What is React?</AccordionHeader>
      <AccordionContent>
        <div className="flex flex-col">
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components.
          <Button variant="outline" size="sm" className="max-w-50">
            Thats Danger Button
          </Button>
        </div>
      </AccordionContent>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="rounded-lg overflow-hidden">
      {items.map((item) => (
        <Accordion>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionContent>{item.content}</AccordionContent>
        </Accordion>
      ))}
    </div>
  ),
};
