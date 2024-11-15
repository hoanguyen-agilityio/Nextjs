'use client';

import { handleSignOut } from '@/actions';

const handleLogout = async () => {
  await handleSignOut();
};

export { handleLogout };
