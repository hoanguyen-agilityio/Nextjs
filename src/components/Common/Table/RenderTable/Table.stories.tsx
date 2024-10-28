import { Meta, StoryObj } from '@storybook/react';
import Table from './RenderTable';
import { rows } from '@/mocks';

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
