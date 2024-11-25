'use client';

import { handleSignOut } from '@/actions';
import { toast } from 'react-toastify';

const handleLogout = async () => {
  await handleSignOut();
  toast.success('Sign out success');
};

export { handleLogout };
