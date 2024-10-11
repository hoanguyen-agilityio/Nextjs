import { getKeyValue, TableCell } from '@nextui-org/react';
import { colors } from '@/themes';
import { TableRowCustomProps } from '@/types';
import { CheckedIcon, ProductIcon } from '@/icons';
import { ButtonCustom } from '@/components';

const renderColumn = (
  columnKey: string,
  { item, index }: TableRowCustomProps,
) => {
  switch (columnKey) {
    case 'no':
      return (
        <TableCell className="font-semibold text-dark-800">
          {index + 1}
        </TableCell>
      );
    case 'name':
      return (
        <TableCell className="font-semibold text-dark-800">
          {getKeyValue(item, columnKey)}
        </TableCell>
      );
    case 'img':
      return (
        <TableCell>
          <ProductIcon width="54px" height="54px" fill={colors.gray[50]} />
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
            className="text-sm text-blue-500 border-1 border-translucent-100 min-w-0 h-auto"
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
