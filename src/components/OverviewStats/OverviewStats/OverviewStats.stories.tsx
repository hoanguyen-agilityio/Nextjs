import { Meta, StoryObj } from '@storybook/react';
import OverviewStats from '.';

export default {
  title: 'Components/OverviewStats',
  component: OverviewStats,
} as Meta;

type Story = StoryObj<typeof OverviewStats>;

// OverviewStats type default
export const OverviewStatsDefault: Story = {
  args: {},
};
