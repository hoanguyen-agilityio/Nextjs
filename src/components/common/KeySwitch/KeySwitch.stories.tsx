import { Meta, StoryObj } from '@storybook/react';
import KeySwitch from '.';

export default {
  title: 'Components/KeySwitch',
  component: KeySwitch,
} as Meta;

type Story = StoryObj<typeof KeySwitch>;

// KeySwitch type default
export const KeySwitchDefault: Story = {
  args: {
    title: 'Generate License Keys',
    describe: 'Issue each customer a unique license key after purchase',
  },
};
