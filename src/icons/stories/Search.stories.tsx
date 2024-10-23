import { Meta, StoryObj } from '@storybook/react';
import SearchIcon from '../Search';

export default {
  title: 'Icon',
  component: SearchIcon,
} as Meta;

type Story = StoryObj<typeof SearchIcon>;

export const SearchIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
