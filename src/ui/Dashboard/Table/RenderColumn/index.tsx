import Link from 'next/link';
import { getKeyValue, Image, TableCell } from '@nextui-org/react';
import { ROUTERS } from '@/constants';
import { TableRowCustomProps } from '@/types';
import { CheckedIcon } from '@/icons';
import { ButtonCustom } from '@/components';
import DropdownIcon from '../../Dropdown';

const RenderColumn = (
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
          <Image
            src={
              Array.isArray(getKeyValue(item, columnKey))
                ? getKeyValue(item, columnKey)[0]
                : getKeyValue(item, columnKey)
            }
            alt={getKeyValue(item, 'name') || 'Image'}
            fallbackSrc={getKeyValue(item, 'fallbackSrc')}
            className="rounded-none"
            loading="lazy"
          />
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
          <Link href={`${ROUTERS.DETAIL}/${item.id}`}>
            <ButtonCustom
              color="default"
              size="md"
              radius="sm"
              className="text-sm font-semibold text-blue-500 border-1 border-translucent-100 min-w-0 h-auto dark:text-blue-500"
            >
              Details
            </ButtonCustom>
          </Link>
        </TableCell>
      );
    case 'dropdown':
      return (
        <TableCell>
          <DropdownIcon />
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

export default RenderColumn;
