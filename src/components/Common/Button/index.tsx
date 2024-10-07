// Third party
import { extendVariants, Button } from '@nextui-org/react';

const ButtonCustom = extendVariants(Button, {
  variants: {
    color: {
      default: 'text-black bg-white border-translucent-700',
      secondary: 'bg-transparent border-transparent',
      primary: 'text-black bg-blue-500 border-blue-500',
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed',
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
