import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./theme/ThemeToggle";
import { ThemeProvider } from "./theme/theme";

const meta: Meta = {
  title: "Introduction",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# EX-UI

A simple React component library built with TypeScript and Tailwind CSS.

## Install

\`\`\`bash
npm i @khazarabdulayev/ex-ui
\`\`\`

## Setup

Add the CSS in your app entry (e.g. \`main.tsx\`):

\`\`\`tsx
import "@khazarabdulayev/ex-ui/style.css";
\`\`\`

## Quick Start

\`\`\`tsx
import { Button } from "@khazarabdulayev/ex-ui";
<Button>Click me</Button>
\`\`\`

## Dark / Light Mode

Wrap your app with \`ThemeProvider\` and add \`ThemeToggle\` (try it below):
        `,
      },
    },
  },
};

export default meta;

export const Welcome: StoryObj = {
  render: () => (
    <ThemeProvider defaultTheme="system">
      <div className="max-w-2xl space-y-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          EX-UI
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A simple React component library. Use the sidebar to explore components.
        </p>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  ),
};
