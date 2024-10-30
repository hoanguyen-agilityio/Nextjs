import { Meta, StoryObj } from '@storybook/react';
import Menu from './index';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

type Story = StoryObj<typeof Menu>;

// Menu type default
export const MenuDefault: Story = {
  args: {},
};
