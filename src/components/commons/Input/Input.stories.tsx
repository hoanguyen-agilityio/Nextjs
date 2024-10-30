import { Meta, StoryObj } from '@storybook/react';
import InputCustom from '.';
import { SearchIcon } from '@/icons';

export default {
  title: 'Components/Search',
  component: InputCustom,
} as Meta;

type Story = StoryObj<typeof InputCustom>;

// Search type default
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

// Search type secondary
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
