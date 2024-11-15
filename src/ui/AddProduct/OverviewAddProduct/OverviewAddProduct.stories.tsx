import { Meta, StoryObj } from '@storybook/react';
import OverviewAddProduct from '.';

export default {
  title: 'UI/Add Product/OverviewAddProduct',
  component: OverviewAddProduct,
} as Meta;

type Story = StoryObj<typeof OverviewAddProduct>;

// OverviewAddProduct type default
export const OverviewAddProductDefault: Story = {
  args: {},
};
