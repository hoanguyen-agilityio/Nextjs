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

const handleLogout = async () => {
  const cookieStore = cookies();
  const storedUsername = cookies().get('username');
  console.log('Hoá nè', storedUsername);

  cookieStore.delete('username');
  cookieStore.delete('password');
};

export { handleLogin, handleLogout };
