import { Meta, StoryObj } from '@storybook/react';
import SettingIcon from '../Settings';

export default {
  title: 'Icon',
  component: SettingIcon,
} as Meta;

type Story = StoryObj<typeof SettingIcon>;

export const SettingIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
