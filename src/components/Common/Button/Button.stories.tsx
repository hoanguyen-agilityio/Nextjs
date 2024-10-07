import { Meta, StoryObj } from '@storybook/react';
import ButtonCustom from './index';
import { ArrowLeft } from '@/icons';

export default {
  title: 'Components/Button',
  component: ButtonCustom,
} as Meta;

type Story = StoryObj<typeof ButtonCustom>;

// Button type default
export const ButtonDefault: Story = {
  args: {
    children: 'Default Button',
    color: 'default',
    size: 'xs',
    radius: 'sm',
  },
};

// Button type default disable
export const ButtonDisabledDefault: Story = {
  args: {
    children: 'Default Button',
    isDisabled: true,
    color: 'default',
    size: 'xs',
    radius: 'sm',
  },
};

// Button with label and icon
export const ButtonWithLabelAndIcon: Story = {
  args: {
    children: 'Button',
    startContent: <ArrowLeft width="19px" height="14px" fill="white" />,
    className:
      'flex py-3 px-6 rounded-lg border border-slate-950 text-white bg-black-900',
    isDisabled: false,
    color: 'default',
    size: 'xs',
    radius: 'sm',
  },
};

// Button icon
export const ButtonIcon: Story = {
  args: {
    startContent: <ArrowLeft width="19px" height="14px" fill="white" />,
    isDisabled: false,
    color: 'default',
    size: 'xs',
    radius: 'sm',
    className:
      'py-3 px-6 rounded-lg border border-slate-950 bg-black-900 text-white',
  },
};

// Button loading
export const ButtonLoading: Story = {
  args: {
    children: 'Loading...',
    color: 'default',
    size: 'xs',
    radius: 'sm',
    isLoading: true,
    isDisabled: true,
    className: 'flex',
  },
};
