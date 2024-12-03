import { Meta, StoryObj } from '@storybook/react';
import OverviewSkeleton from '.';

export default {
  title: 'UI/Dashboard/OverviewSkeleton',
  component: OverviewSkeleton,
} as Meta;

type Story = StoryObj<typeof OverviewSkeleton>;

export const OverviewSkeletonDefault: Story = {
  args: {
    productCount: 4,
  },
};
