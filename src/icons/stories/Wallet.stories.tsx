import { Meta, StoryObj } from '@storybook/react';
import WalletIcon from '../Wallet';

export default {
  title: 'Icon',
  component: WalletIcon,
} as Meta;

type Story = StoryObj<typeof WalletIcon>;

export const WalletIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
