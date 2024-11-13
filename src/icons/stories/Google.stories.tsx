import { Meta, StoryObj } from '@storybook/react';
import GoogleIcon from '../Google';

export default {
  title: 'Icon',
  component: GoogleIcon,
} as Meta;

type Story = StoryObj<typeof GoogleIcon>;

export const GoogleIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
