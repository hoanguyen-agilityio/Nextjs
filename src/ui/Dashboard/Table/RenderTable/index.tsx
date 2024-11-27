// Third party
import {
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { memo } from 'react';

// Constants
import { columns } from '@/mocks';

// Models
import { PaginationProps, ProductList } from '@/types';

// Components
import { TableCustom } from '@/components';
import RenderColumn from '../RenderColumn';
import Pagination from '../../Pagination';

const Table = memo(
  ({
    products,
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
  }: ProductList & PaginationProps) => {
    const hasData = products.length > 0;

    return (
      <div className="overflow-x-auto">
        <TableCustom
          aria-label="Controlled table example with dynamic content"
          selectionMode="multiple"
          color="default"
          size="default"
          bottomContent={
            <Pagination
              data={products}
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              onPageChange={onPageChange}
            />
          }
          className="min-w-[1200px]"
        >
          <TableHeader
            columns={columns}
            className="bg-gray-600 gap-4 text-ratio-500 font-bold p-2 border-b px-7 py-4xl"
          >
            {(column) => (
              <TableColumn className={column.className} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          {hasData ? (
            <TableBody items={products}>
              {(products ?? []).map((item, index) => (
                <TableRow
                  key={item.key}
                  className="p-2 border-b font-semibold dark:border-gray-700"
                  data-hover={false}
                >
                  {(columnKey: React.Key) =>
                    RenderColumn(String(columnKey), {
                      item,
                      index,
                      currentPage,
                      itemsPerPage,
                    })
                  }
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody emptyContent={'No data found.'}>{[]}</TableBody>
          )}
        </TableCustom>
      </div>
    );
  },
);

Table.displayName = 'Table';

export default Table;
