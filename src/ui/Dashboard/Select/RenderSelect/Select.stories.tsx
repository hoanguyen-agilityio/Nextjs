import { Meta, StoryObj } from '@storybook/react';
import { dateDicker, productSelector } from '@/mocks';
import RenderSelect from '.';

export default {
  title: 'Components/RenderSelect',
  component: RenderSelect,
} as Meta;

type Story = StoryObj<typeof RenderSelect>;

// Date dicker
export const DateDicker: Story = {
  args: {
    defaultSelectedKey: 'Weekly',
    items: dateDicker,
    className: 'w-[120px]',
  },
};

// Product selector
export const ProductSelector: Story = {
  args: {
    defaultSelectedKey: 'All Products',
    items: productSelector,
    className: 'w-[152px]',
  },
};
