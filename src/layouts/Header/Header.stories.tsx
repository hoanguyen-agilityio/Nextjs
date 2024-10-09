import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

export default {
  title: 'Layouts/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

// Header type default
export const HeaderDefault: Story = {
  args: {},
};
