import React from 'react';
import type { Preview } from '@storybook/react';
import { renderTheme } from '../src/styles/render-theme';

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
  decorators: [(Story) => renderTheme(<Story />)],
};

export default preview;
