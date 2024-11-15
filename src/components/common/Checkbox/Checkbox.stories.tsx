import { Meta, StoryObj } from '@storybook/react';
import CheckboxCustom from '.';

export default {
  title: 'Components/Checkbox',
  component: CheckboxCustom,
} as Meta;

type Story = StoryObj<typeof CheckboxCustom>;

// CheckboxCustom type default
export const CheckboxCustomDefault: Story = {
  args: {
    size: 'default',
    children: 'Checkbox default',
  },
};
