// Third party
import { extendVariants, Button } from '@nextui-org/react';

const ButtonCustom = extendVariants(Button, {
  variants: {
    color: {
      default: 'text-black bg-white border-gray-700-translucent',
      secondary: 'bg-transparent border-transparent',
      primary: 'text-black bg-blue-500 border-blue-500',
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    isLoading: {
      true: '[&_div]:w-5 [&_div]:h-5',
    },
    size: {
      xs: 'py-4 pl-5 pr-4 text-xbase font-semibold border',
      md: 'py-1 px-2 text-base',
    },
    radius: {
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
