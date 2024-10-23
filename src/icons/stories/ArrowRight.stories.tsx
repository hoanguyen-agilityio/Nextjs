import { Meta, StoryObj } from '@storybook/react';
import ArrowRight from '../ArrowRight';

export default {
  title: 'Icon',
  component: ArrowRight,
} as Meta;

type Story = StoryObj<typeof ArrowRight>;

export const ArrowRightDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
