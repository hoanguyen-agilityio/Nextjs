'use client';

// Third party
import { extendVariants, Select } from '@nextui-org/react';

const SelectCustom = extendVariants(Select, {
  variants: {
    color: {
      default: {
        trigger:
          'bg-white border-1 border-gray-50 dark:bg-dark-900 dark:border-gray-700',
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
