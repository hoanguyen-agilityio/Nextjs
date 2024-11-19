'use client';

// Third party
import { extendVariants, Checkbox } from '@nextui-org/react';

const CheckboxCustom = extendVariants(Checkbox, {
  variants: {
    size: {
      default: {
        label: 'font-normal text-xsm text-grayBlue-400',
      },
    },
  },
});

export default CheckboxCustom;
