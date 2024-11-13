import { Meta, StoryObj } from '@storybook/react';
import EyeSlashFilledIcon from '../EyeSlashFilled';

export default {
  title: 'Icon',
  component: EyeSlashFilledIcon,
} as Meta;

type Story = StoryObj<typeof EyeSlashFilledIcon>;

export const EyeSlashFilledIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
