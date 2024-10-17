'use client';
import { extendVariants, Button } from '@nextui-org/react';

const ButtonCustom = extendVariants(Button, {
  variants: {
    color: {
      default:
        'text-black bg-white border-translucent-700 dark:border-gray-700 dark:bg-dark-900 dark:text-white',
      secondary: 'bg-transparent border-transparent',
      primary: 'bg-blue-500 border-blue-500',
      info: 'bg-translucent-400 text-blue-400',
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    size: {
      xs: 'py-4 pl-5 pr-4 text-xsm font-semibold border',
      md: 'py-1 px-2 text-base',
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
