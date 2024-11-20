'use client';

// Third party
import { extendVariants, Checkbox } from '@nextui-org/react';

const CheckboxCustom = extendVariants(Checkbox, {
  variants: {
    size: {
      default: {
        label: 'font-normal text-xsm text-ratio-200 dark:text-grayBlue-400',
      },
    },
  },
});

export default CheckboxCustom;
