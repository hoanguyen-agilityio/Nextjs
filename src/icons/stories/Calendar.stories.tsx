import { Meta, StoryObj } from '@storybook/react';
import CalendarIcon from '../Calendar';

export default {
  title: 'Icon',
  component: CalendarIcon,
} as Meta;

type Story = StoryObj<typeof CalendarIcon>;

export const CalendarIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
