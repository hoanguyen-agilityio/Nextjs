import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { getAccount } from '@/actions';
import { AUTH } from '@/constants';

// Define the User type expected by NextAuth
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

        try {
          // Fetch users and check for matching username
          const users = await getAccount();
          const user = users.find((user) => user.username === username);

          if (!user) return null; // Return null if no matching user

          // For validation, ensure user object matches the expected User type
          const userObj: User = {
            id: user.id,
            username: user.username,
            password: user.password,
          };

          return userObj; // Return user as User type
        } catch (error) {
          console.error('Error during authorization', error);
          return null;
        }
      },
    }),
  ],
});
