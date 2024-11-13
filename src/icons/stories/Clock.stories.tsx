import { Meta, StoryObj } from '@storybook/react';
import ClockIcon from '../Clock';

export default {
  title: 'Icon',
  component: ClockIcon,
} as Meta;

type Story = StoryObj<typeof ClockIcon>;

export const ClockIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
