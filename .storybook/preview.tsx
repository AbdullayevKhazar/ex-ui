import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/index.css";
import { ThemeProvider } from "../src/theme/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="system">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
