import { Meta, StoryObj } from '@storybook/react';
import Sidebar from '.';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

type Story = StoryObj<typeof Sidebar>;

// Button type default
export const SidebarDefault: Story = {
  args: {},
};
