'use client';

// Third party
import { extendVariants, Button } from '@nextui-org/react';

const ButtonCustom = extendVariants(Button, {
  variants: {
    color: {
      default:
        'text-black bg-white border-translucent-700 dark:border-gray-700 dark:bg-dark-900 dark:text-white',
      secondary: 'bg-transparent border-transparent',
      primary:
        'bg-ratio-400 border-ratio-400 dark:bg-blue-500 dark:border-blue-500',
      info: 'bg-translucent-400 text-blue-400',
      dark: 'bg-black-900 text-white dark:bg-white dark:text-black-900',
      grey: 'bg-lightGray-100 text-white dark:bg-gray-700 dark:text-dark-900',
      bright: 'bg-gray-50 dark:bg-gray-700 text-dark-800 dark:text-white',
      unstyled: 'bg-none border-none',
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    size: {
      s: 'py-3.5 px-5 text-xsm font-semibold border',
      xs: 'py-4 pl-5 pr-4 text-xsm font-semibold border',
      md: 'py-1 px-2 text-base',
      xl: 'font-semibold border py-lg px-5 text-xsm',
      unstyled: 'p-0',
    },
    radius: {
      md: 'rounded-md',
      sm: 'rounded-lg',
    },
    defaultVariants: {
      color: 'default',
      size: 'xs',
      radius: 'sm',
    },
  },
});

export default ButtonCustom;
