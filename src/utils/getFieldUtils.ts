import { IProducts } from '@/types';

const getFieldValue = (label: string, data: IProducts | null) => {
  if (!data) return '';
  switch (label) {
    case 'Name *':
      return data.name;
    case 'Description':
      return data.status;
    case 'Price':
      return data.total;
    case 'Views':
      return data.views;
    case 'Sales':
      return data.sales;
    case 'Conversion':
      return data.conversion;
    case 'Download Button':
      return data.download;
    case 'Product Link':
      return data.link;
    case 'Personal Note':
      return data.personal;
    default:
      return '';
  }
};

export { getFieldValue };
