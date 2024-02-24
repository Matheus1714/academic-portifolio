import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {} from "../src/styles/global.ts"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
