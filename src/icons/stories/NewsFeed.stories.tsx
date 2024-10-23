import { Meta, StoryObj } from '@storybook/react';
import NewsFeedIcon from '../NewsFeed';

export default {
  title: 'Icon',
  component: NewsFeedIcon,
} as Meta;

type Story = StoryObj<typeof NewsFeedIcon>;

export const NewsFeedIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
