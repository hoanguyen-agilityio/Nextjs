import { Meta, StoryObj } from '@storybook/react';
import EyeFilledIcon from '../EyeFilled';

export default {
  title: 'Icon',
  component: EyeFilledIcon,
} as Meta;

type Story = StoryObj<typeof EyeFilledIcon>;

export const EyeFilledIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
