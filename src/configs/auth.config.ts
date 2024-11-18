import { ROUTERS } from '@/constants';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAuthPage = nextUrl.pathname === `/${ROUTERS.LOGIN}`;

      if (isLoggedIn && isAuthPage) {
        // Redirect to the dashboard if logged in and trying to access an auth page
        return Response.redirect(new URL(ROUTERS.HOME, nextUrl));
      }

      if (!isLoggedIn && !isAuthPage) {
        // Redirect to the login page if not logged in and trying to access a private route
        return Response.redirect(new URL(`/${ROUTERS.LOGIN}`, nextUrl));
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
