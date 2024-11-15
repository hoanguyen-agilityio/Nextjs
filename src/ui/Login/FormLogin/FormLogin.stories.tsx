import { Meta, StoryObj } from '@storybook/react';
import FormLogin from '.';

export default {
  title: 'UI/Login/FormLogin',
  component: FormLogin,
} as Meta;

type Story = StoryObj<typeof FormLogin>;

// FormLogin type default
export const FormLoginDefault: Story = {
  args: {},
};
