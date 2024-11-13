import { ACCOUNT_URL, MESSAGE } from '@/constants';
import { apiRequest } from '@/services';
import { Account } from '@/types';

const getAccount = async (): Promise<Account[]> => {
  try {
    if (!ACCOUNT_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }

    return await apiRequest(ACCOUNT_URL, 'GET');
  } catch (error) {
    console.error(MESSAGE.ERROR_GET_ACCOUNT, error);
    return [];
  }
};

export { getAccount };
