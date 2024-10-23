import { Meta, StoryObj } from '@storybook/react';
import MoonIcon from '../Moon';

export default {
  title: 'Icon',
  component: MoonIcon,
} as Meta;

type Story = StoryObj<typeof MoonIcon>;

export const MoonIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
