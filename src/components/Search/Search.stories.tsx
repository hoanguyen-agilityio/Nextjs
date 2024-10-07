import { Meta, StoryObj } from '@storybook/react';
import SearchCustom from '.';
import { SearchIcon } from '@/icons';

export default {
  title: 'Components/Search',
  component: SearchCustom,
} as Meta;

type Story = StoryObj<typeof SearchCustom>;

// Button type default
export const SearchDefault: Story = {
  args: {
    color: 'default',
    placeholder: 'search',
    size: 'xs',
    radius: 'xs',
    startContent: (
      <SearchIcon width="21px" height="21px" className="mr-5 cursor-pointer" />
    ),
  },
};

// Button type secondary
export const SearchSecondary: Story = {
  args: {
    color: 'secondary',
    placeholder: 'search',
    size: 'md',
    radius: 'xs',
    startContent: (
      <SearchIcon width="21px" height="21px" className="mr-5 cursor-pointer" />
    ),
  },
};
