import { Meta, StoryObj } from '@storybook/react';
import Logout from '../Logout';

export default {
  title: 'Icon',
  component: Logout,
} as Meta;

type Story = StoryObj<typeof Logout>;

export const LogoutDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
