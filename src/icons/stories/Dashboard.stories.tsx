import { Meta, StoryObj } from '@storybook/react';
import DashboardIcon from '../Dashboard';

export default {
  title: 'Icon',
  component: DashboardIcon,
} as Meta;

type Story = StoryObj<typeof DashboardIcon>;

export const DashboardIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
