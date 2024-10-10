import { Meta, StoryObj } from '@storybook/react';
import Overview from '.';

export default {
  title: 'Components/Overview',
  component: Overview,
} as Meta;

type Story = StoryObj<typeof Overview>;

// Overview type default
export const OverviewDefault: Story = {
  args: {},
};
