import { IProducts } from '@/types';
import { filterProducts, paginateProducts } from '../productUtils';

const mockProducts: IProducts[] = [
  {
    key: '1',
    name: 'Basic design guideline',
    status: '9 Jan 2023 9:43 PM',
    views: '3147',
    sales: '1004',
    conversion: '6.5%',
    total: '$14.238',
  },
  {
    key: '2',
    name: 'Advanced typography',
    status: '12 Feb 2023 10:15 AM',
    views: '2800',
    sales: '935',
    conversion: '5.8%',
    total: '$12.452',
  },
  {
    key: '3',
    name: 'UI/UX for beginners',
    status: '22 Mar 2023 11:23 AM',
    views: '5240',
    sales: '1234',
    conversion: '7.2%',
    total: '$18.721',
  },
  {
    key: '4',
    name: 'Design Systems 101',
    status: '5 Apr 2023 3:15 PM',
    views: '6532',
    sales: '1045',
    conversion: '5.3%',
    total: '$16.390',
  },
];

describe('filterProducts', () => {
  test('filters products with views below 5k', () => {
    const result = filterProducts(mockProducts, 'views_below_5k');
    expect(result).toEqual([
      {
        key: '1',
        name: 'Basic design guideline',
        status: '9 Jan 2023 9:43 PM',
        views: '3147',
        sales: '1004',
        conversion: '6.5%',
        total: '$14.238',
      },
      {
        key: '2',
        name: 'Advanced typography',
        status: '12 Feb 2023 10:15 AM',
        views: '2800',
        sales: '935',
        conversion: '5.8%',
        total: '$12.452',
      },
    ]);
  });

  test('filters products with views 5k and above', () => {
    const result = filterProducts(mockProducts, 'views_5k_plus');
    expect(result).toEqual([
      {
        key: '3',
        name: 'UI/UX for beginners',
        status: '22 Mar 2023 11:23 AM',
        views: '5240',
        sales: '1234',
        conversion: '7.2%',
        total: '$18.721',
      },
      {
        key: '4',
        name: 'Design Systems 101',
        status: '5 Apr 2023 3:15 PM',
        views: '6532',
        sales: '1045',
        conversion: '5.3%',
        total: '$16.390',
      },
    ]);
  });

  test('returns the original array when no filter is applied', () => {
    const result = filterProducts(mockProducts);
    expect(result).toEqual(mockProducts);
  });
});

describe('paginateProducts', () => {
  test('paginates products correctly for the first page', () => {
    const result = paginateProducts(mockProducts, 1, 2);
    expect(result).toEqual([
      {
        key: '1',
        name: 'Basic design guideline',
        status: '9 Jan 2023 9:43 PM',
        views: '3147',
        sales: '1004',
        conversion: '6.5%',
        total: '$14.238',
      },
      {
        key: '2',
        name: 'Advanced typography',
        status: '12 Feb 2023 10:15 AM',
        views: '2800',
        sales: '935',
        conversion: '5.8%',
        total: '$12.452',
      },
    ]);
  });

  test('paginates products correctly for the second page', () => {
    const result = paginateProducts(mockProducts, 2, 2);
    expect(result).toEqual([
      {
        key: '3',
        name: 'UI/UX for beginners',
        status: '22 Mar 2023 11:23 AM',
        views: '5240',
        sales: '1234',
        conversion: '7.2%',
        total: '$18.721',
      },
      {
        key: '4',
        name: 'Design Systems 101',
        status: '5 Apr 2023 3:15 PM',
        views: '6532',
        sales: '1045',
        conversion: '5.3%',
        total: '$16.390',
      },
    ]);
  });

  test('returns an empty array if page is out of range', () => {
    const result = paginateProducts(mockProducts, 3, 2);
    expect(result).toEqual([]);
  });

  test('returns the original array if itemsPerPage is greater than total products', () => {
    const result = paginateProducts(mockProducts, 1, 10);
    expect(result).toEqual(mockProducts);
  });
});
