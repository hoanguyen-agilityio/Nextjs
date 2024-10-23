import { Meta, StoryObj } from '@storybook/react';
import Logo from '../Logo';

export default {
  title: 'Icon',
  component: Logo,
} as Meta;

type Story = StoryObj<typeof Logo>;

export const LogoDefault: Story = {
  args: {
    width: '267px',
    height: '42px',
    className: '',
  },
};
