import {
  EMPTY_TEXT,
  MESSAGE,
  OVERVIEW_URL,
  PRODUCT_URL,
  ROUTERS,
} from '@/constants';
import { apiRequest, APIs } from '@/services';
import { IProducts, OverviewDataItem } from '@/types';

const getDataProducts = async (
  search = EMPTY_TEXT,
  revalidate = 60,
): Promise<IProducts[] | null> => {
  try {
    if (!PRODUCT_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }

    const url = search.trim()
      ? `?search=${encodeURIComponent(search)}`
      : ROUTERS.EMPTY;

    // const res = await apiRequest<IProducts[]>(
    //   url,
    //   'GET',
    //   undefined,
    //   revalidate,
    // );
    return await APIs.get(url, revalidate);
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
    return [];
  }
};

export { getDataProducts, getDataOverview };
