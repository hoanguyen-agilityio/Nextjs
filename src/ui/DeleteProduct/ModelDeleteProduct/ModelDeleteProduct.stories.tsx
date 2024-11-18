import { Meta, StoryObj } from '@storybook/react';
import ModelDeleteProduct from '.';

export default {
  title: 'UI/Delete Product/ModelDeleteProduct',
  component: ModelDeleteProduct,
} as Meta;

type Story = StoryObj<typeof ModelDeleteProduct>;

// ModelDeleteProduct type default
export const OverviewAddProductDefault: Story = {
  args: {},
};
