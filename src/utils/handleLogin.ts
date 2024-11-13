'use server';
import { getAccount } from '@/actions';
import { Account } from '@/types';
import { md5 } from 'js-md5';
import { cookies } from 'next/headers';

const handleLogin = async ({ username, password }: Account) => {
  try {
    const accountData = await getAccount();

    const matchingAccount = accountData.find(
      (account) =>
        account.username === username && account.password === password,
    );

    // save username + password to cookie "username=..,password="
    // +encode password (MD5 js)
    if (matchingAccount) {
      const cookieStore = cookies();
      const encodedPassword = md5(password);

      cookieStore.set('username', username);
      cookieStore.set('password', encodedPassword);
      return { success: true };
    } else {
      return { success: false, error: 'Incorrect username or password' };
    }
  } catch (error) {
    return {
      success: false,
      error: 'An error occurred and you cannot log in.',
    };
  }
};

export { handleLogin };
