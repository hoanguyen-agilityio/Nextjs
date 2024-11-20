'use server';

import { cookies } from 'next/headers';

const THEME_COOKIE_NAME = 'theme';
const COOKIE_EXPIRATION_DAYS = 365;

export const getThemeFromCookie = () => {
  const cookieStore = cookies();
  cookieStore.get(THEME_COOKIE_NAME) || 'light';
};

export const setThemeInCookie = (theme: string): void => {
  const cookieStore = cookies();
  cookieStore.set(THEME_COOKIE_NAME, theme, {
    expires: COOKIE_EXPIRATION_DAYS,
  });
};
