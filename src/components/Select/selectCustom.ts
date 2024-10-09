'use client';
import { extendVariants, Select } from '@nextui-org/react';

const SelectCustom = extendVariants(Select, {
  variants: {
    color: {
      default: {
        trigger: 'bg-white',
        description: 'text-black',
        label: 'font-bold text-black',
        listbox: 'font-bold text-black',
        value: 'font-bold text-black',
      },
    },
    size: {
      default: {
        trigger: 'py-3.5 h-auto',
        label: 'text-sm',
        listbox: 'text-sm',
      },
    },
  },
});

export default SelectCustom;
