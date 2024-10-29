import { Meta, StoryObj } from '@storybook/react';
import TableSkeleton from '.';

export default {
  title: 'UI/Dashboard/TableSkeleton',
  component: TableSkeleton,
} as Meta;

type Story = StoryObj<typeof TableSkeleton>;

export const OverviewSkeletonDefault: Story = {
  args: {
    productCount: 10,
  },
};
