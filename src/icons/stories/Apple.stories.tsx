import { Meta, StoryObj } from '@storybook/react';
import AppleIcon from '../Apple';

export default {
  title: 'Icon',
  component: AppleIcon,
} as Meta;

type Story = StoryObj<typeof AppleIcon>;

export const AppleIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
