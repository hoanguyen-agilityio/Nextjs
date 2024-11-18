import { Meta, StoryObj } from '@storybook/react';
import Form from '.';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

type Story = StoryObj<typeof Form>;

// Default story for 'add' mode
export const AddMode: Story = {
  args: {
    modePage: 'add',
    label: 'Publish Product',
  },
};
