import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    routes: [
      { route: '/', title: 'Home', default: true },
      { route: '/about', title: 'About' },
      { route: '/publications', title: 'Publications' },
      { route: '/presentations', title: 'Presentations' },
      { route: '/projects', title: 'Projects' },
    ],
  },
};

export const Empty: Story = {};

export const GroupLinks: Story = {
  args: {
    routes: [
      { route: '/', title: 'Home', default: true },
      { route: '/about', title: 'About' },
      { route: '/publications', title: 'Publications' },
      { route: '/presentations', title: 'Presentations' },
      { route: '/projects', title: 'Projects' },
    ],
    groupLinks: true,
  },
};
