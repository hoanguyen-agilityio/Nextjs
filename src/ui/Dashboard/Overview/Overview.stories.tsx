import { Meta, StoryObj } from '@storybook/react';
import Overview from '.';
import { OverviewDataItem } from '@/types';

export default {
  title: 'UI/Dashboard/Overview',
  component: Overview,
} as Meta;

type Story = StoryObj<typeof Overview>;

const data: OverviewDataItem[] = [
  {
    value: '$39,510.32',
    label: 'Total Revenue',
    growth: '+12,7 %',
  },
  {
    value: '175,182',
    label: 'Total Sales',
    growth: '+5,1 %',
  },
  {
    value: '508,072',
    label: 'Customers',
    growth: '+18,3 %',
  },
  {
    value: '105,075',
    label: 'New Subscriptions',
    growth: '+10,6 %',
  },
];

// Overview type default
export const OverviewDefault: Story = {
  args: {
    data: data,
  },
};
