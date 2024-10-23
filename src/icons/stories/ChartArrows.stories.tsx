import { Meta, StoryObj } from '@storybook/react';
import ChartArrows from '../ChartArrows';

export default {
  title: 'Icon',
  component: ChartArrows,
} as Meta;

type Story = StoryObj<typeof ChartArrows>;

export const ChartArrowsDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
