import { Meta, StoryObj } from '@storybook/react';
import { rows } from '@/mocks';
import Table from '.';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

type Story = StoryObj<typeof Table>;

// Table switch type default
export const TableDefault: Story = {
  args: {
    products: rows,
  },
};
