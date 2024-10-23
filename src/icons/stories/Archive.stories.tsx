import { Meta, StoryObj } from '@storybook/react';
import ArchiveIcon from '../Archive';

export default {
  title: 'Icon',
  component: ArchiveIcon,
} as Meta;

type Story = StoryObj<typeof ArchiveIcon>;

export const ArchiveIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
