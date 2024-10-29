import { Meta, StoryObj } from '@storybook/react';
import { rows } from '@/mocks';
import Table from '.';

export default {
  title: 'UI/Dashboard/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

type Story = StoryObj<typeof Table>;

// Table switch type default
export const TableDefault: Story = {
  args: {
    products: rows,
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: rows.length,
    onPageChange: (page: number) => console.log(`Page changed to: ${page}`),
  },
};
