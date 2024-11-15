import { Meta, StoryObj } from '@storybook/react';
import DropdownIcon from '.';

export default {
  title: 'UI/Dashboard/Dropdown',
  component: DropdownIcon,
} as Meta;

type Story = StoryObj<typeof DropdownIcon>;

// DropdownIcon type default
export const DropdownIconDefault: Story = {
  args: {},
};
