import { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { ArrowLeft } from '@/icons';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

// Button type default
export const ButtonDefault: Story = {
  args: {
    label: 'Default Button',
    className: 'py-3 px-6 rounded-lg border-2 border-slate-950',
  },
};

// Button type default disable
export const ButtonDisabledDefault: Story = {
  args: {
    label: 'Default Button',
    className:
      'py-3 px-6 rounded-lg border-2 border-slate-950 cursor-not-allowed opacity-50',
    isDisabled: true,
  },
};

// Button with label and icon
export const ButtonWithLabelAndIcon: Story = {
  args: {
    label: 'Button',
    startContent: <ArrowLeft width="19px" height="14px" fill="white" />,
    className:
      'flex py-3 px-6 rounded-lg border-2 border-slate-950 bg-black text-white',
    isDisabled: false,
  },
};

// Button icon
export const ButtonIcon: Story = {
  args: {
    startContent: <ArrowLeft width="19px" height="14px" fill="white" />,
    className:
      'py-3 px-6 rounded-lg border-2 border-slate-950 bg-black text-white',
    isDisabled: false,
  },
};
