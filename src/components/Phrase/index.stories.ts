import type { Meta, StoryObj } from '@storybook/react';
import { Phrase } from '.';

const meta: Meta<typeof Phrase> = {
  title: 'Phrase',
  component: Phrase,
};

export default meta;
type Story = StoryObj<typeof Phrase>;

export const Default: Story = {
  args: {
    author: 'Here the author name',
    text: 'Here you will put your phrase',
  },
};
