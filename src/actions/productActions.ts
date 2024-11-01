import { EMPTY_TEXT, MESSAGE, OVERVIEW_URL, PRODUCT_URL } from '@/constants';
import { apiRequest } from '@/services';
import { IProducts, OverviewDataItem } from '@/types';

const getDataProducts = async (
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
    console.error(MESSAGE.ERROR_GET_DATA_PRODUCT, error);
    return null;
  }
};

const getDataOverview = async () => {
  const revalidate = 60;
  try {
    if (!OVERVIEW_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }
    const res = await apiRequest<OverviewDataItem[]>(
      OVERVIEW_URL,
      'GET',
      undefined,
      revalidate,
    );
    return res;
  } catch (error) {
    console.error(MESSAGE.ERROR_GET_DATA_OVERVIEW, error);
  }
};

export { getDataProducts, getDataOverview };
