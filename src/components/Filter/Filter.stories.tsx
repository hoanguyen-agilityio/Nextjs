import { Meta, StoryObj } from '@storybook/react';
import Filter from '.';

export default {
  title: 'Components/Filter',
  component: Filter,
} as Meta;

type Story = StoryObj<typeof Filter>;

export const FilterDefault: Story = {
  args: {},
};
