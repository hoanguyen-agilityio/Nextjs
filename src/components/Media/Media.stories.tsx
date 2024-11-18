import { Meta, StoryObj } from '@storybook/react';
import Media from '.';

export default {
  title: 'Components/Media',
  component: Media,
} as Meta;

type Story = StoryObj<typeof Media>;

// Media type default
export const MediaDefault: Story = {
  args: {},
};
