'use server';
import { signIn } from '@/configs';
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

const handleSignIn = async (payload: Account) => {
  try {
    return await signIn('credentials', payload);
  } catch (error) {
    return { error: `Failed to Sign In ${error}` };
  }
};

export { getAccount, handleSignIn };
