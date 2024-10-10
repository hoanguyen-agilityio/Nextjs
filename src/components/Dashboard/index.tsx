'use client';
import { CheckedIcon, ProductIcon } from '@/icons';
import {
  getKeyValue,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { ButtonCustom, TableCustom } from '../Common';

const rows = [
  {
    key: '1',
    img: '',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
  {
    key: '2',
    img: '',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
  {
    key: '3',
    img: '',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
  {
    key: '4',
    img: '',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
];

const columns = [
  {
    key: 'no',
    label: 'No',
    className: 'w-20',
  },
  {
    key: 'img',
    label: '',
    className: 'w-16',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'views',
    label: 'Views',
  },
  {
    key: 'sales',
    label: 'Sales',
  },
  {
    key: 'conversion',
    label: 'Conversion',
  },
  {
    key: 'total',
    label: 'Total',
  },
  {
    key: 'details',
    label: 'Details',
  },
];

const Dashboard = () => {
  return (
    <TableCustom
      aria-label="Controlled table example with dynamic content"
      selectionMode="multiple"
      color="default"
    >
      <TableHeader
        columns={columns}
        className="bg-gray-600 gap-4 text-gray-500 font-bold p-2 border-b"
      >
        {(column) => {
          return (
            <TableColumn className={column.className} key={column.key}>
              {column.label}
            </TableColumn>
          );
        }}
      </TableHeader>
      <TableBody items={rows} className="">
        {rows.map((item, index) => (
          <TableRow key={item.key} className="p-2 border-b font-semibold">
            {(columnKey) => {
              if (columnKey === 'no') {
                return <TableCell>{index + 1}</TableCell>;
              }
              if (columnKey === 'img') {
                return (
                  <TableCell>
                    <ProductIcon width="54px" height="54px" fill="#F1F4F9" />
                  </TableCell>
                );
              }
              if (columnKey === 'status') {
                return (
                  <TableCell className="flex items-center h-[70px]">
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
              return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
            }}
          </TableRow>
        ))}
      </TableBody>
    </TableCustom>
  );
};

export default Dashboard;
