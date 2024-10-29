import { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

export default {
  title: 'UI/Dashboard/Pagination',
  component: Pagination,
} as Meta;

type Story = StoryObj<typeof Pagination>;

// Pagination type default
export const PaginationDefault: Story = {
  args: {},
};
