import { EMPTY_TEXT, MESSAGE, PRODUCT_URL } from '@/constant';
import { IProducts } from '@/types';
import { apiRequest } from './api';

const getData = async (
  search = EMPTY_TEXT,
  revalidate = 10,
): Promise<IProducts[] | null> => {
  try {
    if (!PRODUCT_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }

    const url = search.trim()
      ? `${PRODUCT_URL}?search=${encodeURIComponent(search)}`
      : PRODUCT_URL;

    const res = await apiRequest<IProducts[]>(
      url,
      'GET',
      undefined,
      revalidate,
    );
    return res;
  } catch (error) {
    console.error(MESSAGE.ERROR_GET_DATA, error);
    return null;
  }
};

export { getData };
