// Libs
import NextAuth from 'next-auth';
import { authConfig } from './configs/auth.config';

// Auth configs
export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    '/((?!api|_next/static|sitemap.xml|robots.txt|_next/image|.*\\.png$).*)',
  ],
};
