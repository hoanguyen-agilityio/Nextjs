import { Meta, StoryObj } from '@storybook/react';
import CheckedIcon from '../Checked';

export default {
  title: 'Icon',
  component: CheckedIcon,
} as Meta;

type Story = StoryObj<typeof CheckedIcon>;

export const CheckedIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
