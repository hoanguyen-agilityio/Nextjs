import { ROUTERS } from '@/constants';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: ROUTERS.LOGIN,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isLoginPage = nextUrl.pathname === ROUTERS.LOGIN;

      // If the user is logged in and tries to access the login page, redirect to the home page
      if (isLoggedIn && isLoginPage) {
        return Response.redirect(new URL(ROUTERS.HOME, nextUrl));
      }

      // If the user is not logged in and accesses a protected page, redirect to the login page
      if (!isLoggedIn && !isLoginPage) {
        return Response.redirect(new URL(ROUTERS.LOGIN, nextUrl));
      }

      return true;
    },
    jwt: async ({ user, token }) => {
      if (token) Object.assign(token, user);

      return token;
    },

    session: ({ session, token }) => {
      Object.assign(session.user, token);

      return session;
    },
  },
  session: {
    maxAge: 60 * 60 * 24 * 5,
  },
  trustHost: true,
  providers: [],
} satisfies NextAuthConfig;
