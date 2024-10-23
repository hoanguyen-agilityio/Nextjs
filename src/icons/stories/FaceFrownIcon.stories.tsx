import { Meta, StoryObj } from '@storybook/react';
import FaceFrownIcon from '../FaceFrownIcon';

export default {
  title: 'Icon',
  component: FaceFrownIcon,
} as Meta;

type Story = StoryObj<typeof FaceFrownIcon>;

export const FaceFrownIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
