import { Meta, StoryObj } from '@storybook/react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter, useSearchParams } from 'next/navigation';
import Filter from '.';

const mockRouter = {
  push: () => Promise.resolve(true),
  replace: () => Promise.resolve(true),
  reload: () => Promise.resolve(true),
  back: () => Promise.resolve(true),
  prefetch: () => Promise.resolve(),
};

const mockSearchParams = {
  get: () => null,
};

export default {
  title: 'Components/Filter',
  component: Filter,
  decorators: [
    (Story) => {
      (useRouter as jest.Mock).mockReturnValue(mockRouter);
      (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

      return (
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <Story />
          </NextThemesProvider>
        </NextUIProvider>
      );
    },
  ],
} as Meta;

type Story = StoryObj<typeof Filter>;

export const FilterDefault: Story = {
  args: {},
};
