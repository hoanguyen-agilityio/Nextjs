import { Meta, StoryObj } from '@storybook/react';
import ChipCustom from '.';

export default {
  title: 'Components/ChipCustom',
  component: ChipCustom,
} as Meta;

type Story = StoryObj<typeof ChipCustom>;

// ChipCustom type default
export const ChipCustomDefault: Story = {
  args: {
    color: 'success',
    size: 'sm',
    children: 'Chip custom',
    className: '',
  },
};
