import type { Meta, StoryObj } from '@storybook/react';
import { CursorAnimation } from '.';

const meta: Meta<typeof CursorAnimation> = {
  title: 'Cursor Animation',
  component: CursorAnimation,
};

export default meta;
type Story = StoryObj<typeof CursorAnimation>;

export const Default: Story = {
  args: {
    firstText: 'First',
    secondText: 'Second'
  }
};