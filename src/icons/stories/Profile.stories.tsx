import { Meta, StoryObj } from '@storybook/react';
import ProfileIcon from '../Profile';

export default {
  title: 'Icon',
  component: ProfileIcon,
} as Meta;

type Story = StoryObj<typeof ProfileIcon>;

export const ProfileIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
