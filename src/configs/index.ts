import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { AUTH, MESSAGE } from '@/constants';
import { getAccount } from '@/actions';

interface User {
  id?: string;
  username: string;
  password: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: AUTH,
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async (credentials) => {
        const { username, password } = credentials || {};

        // If no credentials, return null
        if (!username || !password) return null;

        // Fetch users and check for matching username
        const users = await getAccount();

        const user = users.find(
          (user) => user.username === username && user.password === password,
        );

        if (!user) {
          throw new Error(MESSAGE.INVALID_ACCOUNT);
        }

        // For validation, ensure user object matches the expected User type
        const userObj: User = {
          id: user.id,
          username: user.username,
          password: user.password,
        };

        return userObj; // Return user as User type
      },
    }),
  ],
});
