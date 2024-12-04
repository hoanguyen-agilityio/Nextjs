import { handleSignOut } from '@/actions';
import { toast } from 'react-toastify';
import { handleLogout } from '../authActions';

jest.mock('@/actions', () => ({
  handleSignOut: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe('handleLogout', () => {
  test('should call handleSignOut and display a success toast', async () => {
    (handleSignOut as jest.Mock).mockResolvedValueOnce(undefined);

    await handleLogout();

    expect(handleSignOut).toHaveBeenCalledTimes(1);

    expect(toast.success).toHaveBeenCalledWith('Sign out success');
  });
});
