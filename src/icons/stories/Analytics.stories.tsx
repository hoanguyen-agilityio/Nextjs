import { Meta, StoryObj } from '@storybook/react';
import AnalyticsIcon from '../Analytics';

export default {
  title: 'Icon',
  component: AnalyticsIcon,
} as Meta;

type Story = StoryObj<typeof AnalyticsIcon>;

export const AnalyticsIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
