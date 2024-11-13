import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const storedUsername = request.cookies.get('username');
  const storedPassword = request.cookies.get('password');

  // Redirect to login if accessing auth routes without credentials
  if (!storedUsername || !storedPassword) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow navigation if above conditions do not trigger
  return NextResponse.next();
};

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
