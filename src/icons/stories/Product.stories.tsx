import { Meta, StoryObj } from '@storybook/react';
import ProductIcon from '../Product';

export default {
  title: 'Icon',
  component: ProductIcon,
} as Meta;

type Story = StoryObj<typeof ProductIcon>;

export const ProductIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
