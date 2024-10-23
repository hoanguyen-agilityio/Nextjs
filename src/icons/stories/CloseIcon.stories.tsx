import { Meta, StoryObj } from '@storybook/react';
import CloseIcon from '../CloseIcon';

export default {
  title: 'Icon',
  component: CloseIcon,
} as Meta;

type Story = StoryObj<typeof CloseIcon>;

export const CloseIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
    fill: 'black',
  },
};
