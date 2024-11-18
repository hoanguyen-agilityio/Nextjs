import { Meta, StoryObj } from '@storybook/react';
import InputField from '.';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta;

type Story = StoryObj<typeof InputField>;

// InputField type default
export const InputFieldDefault: Story = {
  args: {
    label: 'default',
  },
};

export const InputFieldWithMessage: Story = {
  args: {
    label: 'default',
    message: 'message',
  },
};

export const InputFieldWithErrorMessage: Story = {
  args: {
    label: 'default',
    errorMsg: 'Error message',
  },
};
