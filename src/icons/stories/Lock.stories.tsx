import { Meta, StoryObj } from '@storybook/react';
import LockIcon from '../Lock';

export default {
  title: 'Icon',
  component: LockIcon,
} as Meta;

type Story = StoryObj<typeof LockIcon>;

export const LockIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
