import { Meta, StoryObj } from '@storybook/react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '.';

export default {
  title: 'Layouts/Header',
  component: Header,
  decorators: [
    (Story) => (
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Story />
        </NextThemesProvider>
      </NextUIProvider>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Header>;

// Header type default
export const HeaderDefault: Story = {
  args: {},
};
