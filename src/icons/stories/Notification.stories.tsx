import { Meta, StoryObj } from '@storybook/react';
import NotificationIcon from '../Notification';

export default {
  title: 'Icon',
  component: NotificationIcon,
} as Meta;

type Story = StoryObj<typeof NotificationIcon>;

export const NotificationIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
