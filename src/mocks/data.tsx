import Link from 'next/link';
import { ROUTERS } from '@/constants';
import { ProductAction } from '@/types';

const dateDicker = [
  { key: 'day', label: 'Day' },
  { key: 'weekly', label: 'Weekly' },
  { key: 'month', label: 'Month' },
  { key: 'year', label: 'Year' },
];

const productSelector = [
  { key: 'allProducts', label: 'All Products' },
  { key: 'products', label: 'Products' },
];

const data = [
  {
    value: '$39,510.32',
    label: 'Total Revenue',
    growth: '+12,7 %',
  },
  {
    value: '175,182',
    label: 'Total Sales',
    growth: '+5,1 %',
  },
  {
    value: '508,072',
    label: 'Customers',
    growth: '+18,3 %',
  },
  {
    value: '105,075',
    label: 'New Subscriptions',
    growth: '+10,6 %',
  },
];

const rows = [
  {
    key: '1',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
  {
    key: '2',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
  {
    key: '3',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3.147',
    sales: '1.004',
    conversion: '6,5%',
    total: '$14.238',
  },
  {
    key: '4',
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
    className: 'w-10',
  },
  {
    key: 'dropdown',
    label: '',
  },
];

const items = [
  {
    key: 'views_below_5k',
    label: 'Views < 5000',
  },
  {
    key: 'views_5k_plus',
    label: 'Views ≥ 5000',
  },
];

const productActions: ProductAction[] = [
  {
    key: 'new',
    label: <Link href={ROUTERS.ADD_PRODUCT}>Add New Product</Link>,
    color: 'default',
  },
  {
    key: 'edit',
    label: <Link href={ROUTERS.EDIT_PRODUCT}>Edit Product</Link>,
    color: 'default',
  },
  {
    key: 'delete',
    label: 'Delete Product',
    className: 'text-danger',
    color: 'danger',
  },
];

export {
  dateDicker,
  productSelector,
  data,
  rows,
  columns,
  items,
  productActions,
};
