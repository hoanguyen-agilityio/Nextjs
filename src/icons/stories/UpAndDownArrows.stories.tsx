import { Meta, StoryObj } from '@storybook/react';
import UpAndDownArrows from '../UpAndDownArrows';

export default {
  title: 'Icon',
  component: UpAndDownArrows,
} as Meta;

type Story = StoryObj<typeof UpAndDownArrows>;

export const UpAndDownArrowsDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
    fill: 'black',
  },
};
