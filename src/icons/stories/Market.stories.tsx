import { Meta, StoryObj } from '@storybook/react';
import MarketIcon from '../Market';

export default {
  title: 'Icon',
  component: MarketIcon,
} as Meta;

type Story = StoryObj<typeof MarketIcon>;

export const MarketIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
