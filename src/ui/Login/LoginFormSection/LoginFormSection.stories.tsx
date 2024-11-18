import { Meta, StoryObj } from '@storybook/react';
import LoginFormSection from '.';

export default {
  title: 'UI/Login/LoginFormSection',
  component: LoginFormSection,
} as Meta;

type Story = StoryObj<typeof LoginFormSection>;

// FormLogin type default
export const FormLoginDefault: Story = {
  args: {},
};
