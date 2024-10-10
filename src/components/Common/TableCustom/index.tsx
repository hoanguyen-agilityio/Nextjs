'use client';
import { extendVariants, Table } from '@nextui-org/react';

const TableCustom = extendVariants(Table, {
  variants: {
    color: {
      default: {
        td: 'data-[selected=true]:before:opacity-0',
      },
    },
  },
});

export default TableCustom;
