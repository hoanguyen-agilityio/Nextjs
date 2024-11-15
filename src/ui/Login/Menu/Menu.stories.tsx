import { Meta, StoryObj } from '@storybook/react';
import Menu from '.';

export default {
  title: 'UI/Login/Menu',
  component: Menu,
} as Meta;

type Story = StoryObj<typeof Menu>;

// Menu type default
export const MenuDefault: Story = {
  args: {},
};
