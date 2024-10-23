import { Meta, StoryObj } from '@storybook/react';
import InboxIcon from '../Inbox';

export default {
  title: 'Icon',
  component: InboxIcon,
} as Meta;

type Story = StoryObj<typeof InboxIcon>;

export const InboxIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
