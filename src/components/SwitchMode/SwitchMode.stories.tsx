import { Meta, StoryObj } from '@storybook/react';
import SwitchMode from '.';

export default {
  title: 'Components/SwitchMode',
  component: SwitchMode,
} as Meta;

type Story = StoryObj<typeof SwitchMode>;

// Switch Mode type default
export const SwitchModeDefault: Story = {
  args: {},
};
