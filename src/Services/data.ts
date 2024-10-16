import { PRODUCT_URL } from '@/Constant';
import { apiRequest } from './api';
import { IProducts } from '@/types';

const getData = async (search = ''): Promise<IProducts[] | null> => {
  try {
    if (!PRODUCT_URL) {
      throw new Error('PRODUCT_URL is undefined');
    }

    const url = search.trim()
      ? `${PRODUCT_URL}?search=${encodeURIComponent(search)}`
      : PRODUCT_URL;

    const res = await apiRequest<IProducts[]>(url, 'GET');
    return res;
  } catch (error) {
    console.error('Error in getData:', error);
    return null;
  }
};

export { getData };
