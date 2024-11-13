import { Meta, StoryObj } from '@storybook/react';
import BackIcon from '../Back';

export default {
  title: 'Icon',
  component: BackIcon,
} as Meta;

type Story = StoryObj<typeof BackIcon>;

export const BackIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
