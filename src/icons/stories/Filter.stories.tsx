import { Meta, StoryObj } from '@storybook/react';
import FilterIcon from '../Filter';

export default {
  title: 'Icon',
  component: FilterIcon,
} as Meta;

type Story = StoryObj<typeof FilterIcon>;

export const FilterIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
