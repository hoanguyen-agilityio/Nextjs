'use client';
import {
  getKeyValue,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { memo } from 'react';
import { colors } from '@/themes';
import { ProductList } from '@/types';
import { columns, rows } from '@/mocks';
import { CheckedIcon, ProductIcon } from '@/icons';
import { ButtonCustom, TableCustom } from '@/components';

const Dashboard = memo(({ products }: ProductList) => (
  <TableCustom
    aria-label="Controlled table example with dynamic content"
    selectionMode="multiple"
    color="default"
    size="default"
  >
    <TableHeader
      columns={columns}
      className="bg-gray-600 gap-4 text-gray-500 font-bold p-2 border-b px-7 py-4xl"
    >
      {(column) => {
        return (
          <TableColumn className={column.className} key={column.key}>
            {column.label}
          </TableColumn>
        );
      }}
    </TableHeader>
    <TableBody items={products}>
      {rows.map((item, index) => (
        <TableRow key={item.key} className="p-2 border-b font-semibold">
          {(columnKey) => {
            if (columnKey === 'no') {
              return (
                <TableCell className="font-semibold text-dark-800">
                  {index + 1}
                </TableCell>
              );
            }
            if (columnKey === 'name') {
              return (
                <TableCell className="font-semibold text-dark-800">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              );
            }
            if (columnKey === 'img') {
              return (
                <TableCell>
                  <ProductIcon
                    width="54px"
                    height="54px"
                    fill={colors.gray[50]}
                  />
                </TableCell>
              );
            }
            if (columnKey === 'status') {
              return (
                <TableCell className="flex items-center h-[70px] font-semibold text-grayBlue-400">
                  <CheckedIcon width="18px" height="18px" className="mr-2" />
                  {getKeyValue(item, columnKey)}
                </TableCell>
              );
            }
            if (columnKey === 'details') {
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
            }
            return (
              <TableCell className="font-semibold text-grayBlue-400">
                {getKeyValue(item, columnKey)}
              </TableCell>
            );
          }}
        </TableRow>
      ))}
    </TableBody>
  </TableCustom>
));

Dashboard.displayName = 'Dashboard';

export default Dashboard;
