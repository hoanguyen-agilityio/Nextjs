import { Meta, StoryObj } from '@storybook/react';
import ImageIcon from '../Image';

export default {
  title: 'Icon',
  component: ImageIcon,
} as Meta;

type Story = StoryObj<typeof ImageIcon>;

export const ImageIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
