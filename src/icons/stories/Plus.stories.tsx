import { Meta, StoryObj } from '@storybook/react';
import PlusIcon from '../Plus';

export default {
  title: 'Icon',
  component: PlusIcon,
} as Meta;

type Story = StoryObj<typeof PlusIcon>;

export const PlusIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
