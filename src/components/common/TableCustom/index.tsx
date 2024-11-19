'use client';

// Third party
import { extendVariants, Table } from '@nextui-org/react';

const TableCustom = extendVariants(Table, {
  variants: {
    color: {
      default: {
        td: 'data-[selected=true]:before:opacity-0',
      },
    },
    size: {
      default: {
        base: 'mt-5',
        wrapper: 'py-7 px-4xl',
      },
    },
  },
});

export default TableCustom;
