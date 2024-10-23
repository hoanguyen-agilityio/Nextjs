import { getKeyValue, TableCell } from '@nextui-org/react';
import { TableRowCustomProps } from '@/types';
import { CheckedIcon, ProductIcon } from '@/icons';
import { ButtonCustom } from '@/components';

const renderColumn = (
  columnKey: string,
  { item, index, currentPage, itemsPerPage }: TableRowCustomProps,
) => {
  switch (columnKey) {
    case 'no':
      return (
        <TableCell className="font-semibold text-dark-800 dark:text-white">
          {index + 1 + (currentPage - 1) * itemsPerPage}
        </TableCell>
      );
    case 'name':
      return (
        <TableCell className="font-semibold text-dark-800 dark:text-white">
          {getKeyValue(item, columnKey)}
        </TableCell>
      );
    case 'img':
      return (
        <TableCell>
          <ProductIcon width="54px" height="54px" />
        </TableCell>
      );
    case 'status':
      return (
        <TableCell className="flex items-center h-[70px] font-semibold text-grayBlue-400">
          <CheckedIcon width="18px" height="18px" className="mr-2" />
          {getKeyValue(item, columnKey)}
        </TableCell>
      );
    case 'details':
      return (
        <TableCell>
          <ButtonCustom
            color="default"
            size="md"
            radius="sm"
            className="text-sm font-semibold text-blue-500 border-1 border-translucent-100 min-w-0 h-auto dark:text-blue-500"
          >
            Details
          </ButtonCustom>
        </TableCell>
      );
    default:
      return (
        <TableCell className="font-semibold text-grayBlue-400">
          {getKeyValue(item, columnKey)}
        </TableCell>
      );
  }
};

export default renderColumn;
