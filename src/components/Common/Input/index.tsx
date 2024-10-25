'use client';
import { extendVariants, Input } from '@nextui-org/react';

const InputCustom = extendVariants(Input, {
  variants: {
    color: {
      default: {
        inputWrapper: [
          'bg-gray-50',
          'flex items-center space-x-2',
          'h-full',
          // dark theme
          'dark:bg-gray-700',
          'focus-within:ring-0',
        ],
        input: [
          'text-grayBlue-400',
          'flex-grow',
          'focus:outline-none',
          'focus:ring-0',
        ],
      },
      secondary: {
        inputWrapper: [
          'bg-white',
          'flex items-center space-x-2',
          'border',
          'border-gray-50',
          'h-full',
          // dark theme
          'dark:bg-dark-900',
          'dark:border-gray-700',
          'focus-within:ring-0',
        ],
        input: [
          'text-grayBlue-400',
          'placeholder:text-grayBlue-400',
          'flex-grow',
          'focus:outline-none',
          'focus:ring-0',
        ],
      },
    },
    size: {
      xs: {
        mainWrapper: 'w-xl h-14',
        innerWrapper: 'flex',
        inputWrapper: 'py-4 px-6 w-full',
        input: 'text-base font-semibold',
      },
      md: {
        base: 'w-80',
        mainWrapper: 'w-80 h-12',
        innerWrapper: 'flex',
        inputWrapper: 'py-3.5 px-5 w-80',
        input: 'text-base font-semibold',
      },
    },
    radius: {
      xs: {
        inputWrapper: 'rounded-lg',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'xs',
    radius: 'xs',
  },
});

export default InputCustom;
