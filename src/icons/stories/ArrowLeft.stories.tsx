import { Meta, StoryObj } from '@storybook/react';
import ArrowLeft from '../ArrowLeft';

export default {
  title: 'Icon',
  component: ArrowLeft,
} as Meta;

type Story = StoryObj<typeof ArrowLeft>;

export const ArrowLeftDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
