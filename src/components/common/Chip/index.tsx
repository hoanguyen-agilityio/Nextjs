'use client';

// Third party
import { extendVariants, Chip } from '@nextui-org/react';

const ChipCustom = extendVariants(Chip, {
  variants: {
    color: {
      success: {
        base: 'bg-green-100 dark:bg-green-200',
        content: 'text-ratio-900 dark:text-green-400',
      },
    },
    size: {
      sm: {
        base: 'py-1.5 px-2 rounded-lg',
        content: 'font-semibold text-base',
      },
    },
  },
});

export default ChipCustom;
