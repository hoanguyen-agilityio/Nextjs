// Libs
import NextAuth from 'next-auth';
import { authConfig } from './configs/auth.config';

// Auth configs
export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    '/',
    '/analytics',
    '/archive',
    '/detail/:id*',
    '/inbox',
    '/market',
    '/newsFeed',
    '/wallet',
    '/add',
    '/edit/:id*',
  ],
};
