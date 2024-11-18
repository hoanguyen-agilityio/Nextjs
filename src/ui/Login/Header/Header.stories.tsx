import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

export default {
  title: 'UI/Login/HeaderLogin',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

// Header login
export const HeaderLoginDefault: Story = {
  args: {},
};
