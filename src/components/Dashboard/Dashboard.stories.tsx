import { Meta, StoryObj } from '@storybook/react';
import Dashboard from '.';
import { rows } from '@/mocks';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
} as Meta;

type Story = StoryObj<typeof Dashboard>;

// Dashboard switch type default
export const DashboardDefault: Story = {
  args: {
    products: rows,
  },
};
