import { Meta, StoryObj } from '@storybook/react';
import NewCustomerIcon from '../NewCustomer';

export default {
  title: 'Icon',
  component: NewCustomerIcon,
} as Meta;

type Story = StoryObj<typeof NewCustomerIcon>;

export const NewCustomerIconDefault: Story = {
  args: {
    width: '64px',
    height: '64px',
    className: '',
  },
};
