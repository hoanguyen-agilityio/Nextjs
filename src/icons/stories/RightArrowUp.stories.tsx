import { Meta, StoryObj } from '@storybook/react';
import RightArrowUp from '../RightArrowUp';

export default {
  title: 'Icon',
  component: RightArrowUp,
} as Meta;

type Story = StoryObj<typeof RightArrowUp>;

export const RightArrowUpDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
