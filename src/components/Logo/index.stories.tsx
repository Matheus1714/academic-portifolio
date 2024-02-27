import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    title: "My title",
    subtitle: "My subtitle"
  }
}

export const WithoutSubtitle: Story = {
  args: {
    title: "My title",
  }
}

export const Simplified: Story = {
  args: {
    title: "My title",
    simplify: true
  }
}