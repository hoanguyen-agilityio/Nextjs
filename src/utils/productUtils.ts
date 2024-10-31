import { IProducts } from '@/types';

export const filterProducts = (
  products: IProducts[],
  filter?: string,
): IProducts[] => {
  if (!Array.isArray(products)) return [];

  const parseNumber = (value: string) => Number(value.replace(/,/g, ''));

  switch (filter) {
    case 'views_below_5k':
      return products.filter((item) => parseNumber(item.views) < 5000);
    case 'views_5k_plus':
      return products.filter((item) => parseNumber(item.views) >= 5000);
    default:
      return products;
  }
};

export const paginateProducts = (
  products: IProducts[],
  currentPage: number,
  itemsPerPage: number,
) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return products.slice(indexOfFirstItem, indexOfLastItem);
};
