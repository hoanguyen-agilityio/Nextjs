'use server';
import { signIn, signOut } from '@/configs';
import { ACCOUNT_URL, MESSAGE, ROUTERS } from '@/constants';
import { APIs } from '@/services';
import { Account } from '@/types';

const getAccount = async (): Promise<Account[]> => {
  try {
    if (!ACCOUNT_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }

    return await APIs.get(undefined, undefined, ACCOUNT_URL);
  } catch (error) {
    console.error(MESSAGE.ERROR_GET_ACCOUNT, error);
    return [];
  }
};

const handleSignIn = async (payload: Account) => {
  try {
    const result = await signIn('credentials', {
      ...payload,
      redirect: false,
    });

    if (result?.error) {
      return { error: result.error };
    }

    return { success: true };
  } catch (error) {
    return { error: MESSAGE.INVALID_ACCOUNT };
  }
};

const handleSignOut = async () => {
  await signOut({ redirectTo: `/${ROUTERS.LOGIN}` });
};

export { getAccount, handleSignIn, handleSignOut };
