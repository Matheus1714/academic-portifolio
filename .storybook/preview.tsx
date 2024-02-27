import React from 'react';
import type { Preview } from '@storybook/react';
import { renderTheme } from '../src/styles/render-theme';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => renderTheme(
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )],
};

export default preview;
