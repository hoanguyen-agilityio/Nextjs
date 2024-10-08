import { Meta, StoryObj } from '@storybook/react';
import DarkModeSwitch from '.';

export default {
  title: 'Components/DarkModeSwitch',
  component: DarkModeSwitch,
} as Meta;

type Story = StoryObj<typeof DarkModeSwitch>;

// Dark mode switch type default
export const DarkModeSwitchDefault: Story = {
  args: {},
};
