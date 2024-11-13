import { Meta, StoryObj } from '@storybook/react';
import LogoWithoutText from '../LogoWithoutText';

export default {
  title: 'Icon',
  component: LogoWithoutText,
} as Meta;

type Story = StoryObj<typeof LogoWithoutText>;

export const LogoWithoutTextDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
