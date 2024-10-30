import { Meta, StoryObj } from '@storybook/react';
import OverviewStats from '.';
import { OverviewDataItem } from '@/types';

export default {
  title: 'UI/Dashboard/OverviewStats',
  component: OverviewStats,
} as Meta;

type Story = StoryObj<typeof OverviewStats>;

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

// OverviewStats type default
export const OverviewStatsDefault: Story = {
  args: {
    data: data,
  },
};
