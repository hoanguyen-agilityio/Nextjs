import { signIn, signOut } from '@/configs';
import { ACCOUNT_URL, ROUTERS } from '@/constants';
import { apiRequest } from '@/services';
import { getAccount, handleSignIn, handleSignOut } from '..';

jest.mock('@/configs', () => ({
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock('@/services', () => ({
  apiRequest: jest.fn(),
}));

describe('Account Actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAccount', () => {
    test('should return account data when API call succeeds', async () => {
      const mockAccounts = [{ id: 1, username: 'testUser' }];
      (apiRequest as jest.Mock).mockResolvedValue(mockAccounts);

      const result = await getAccount();
      expect(apiRequest).toHaveBeenCalledWith(ACCOUNT_URL, 'GET');
      expect(result).toEqual(mockAccounts);
    });
  });

  describe('handleSignIn', () => {
    test('should return success when signIn is successful', async () => {
      const mockPayload = { username: 'testUser', password: 'testPass' };
      (signIn as jest.Mock).mockResolvedValue({ error: null });

      const result = await handleSignIn(mockPayload);
      expect(signIn).toHaveBeenCalledWith('credentials', {
        ...mockPayload,
        redirect: false,
      });
      expect(result).toEqual({ success: true });
    });

    test('should return error when signIn fails', async () => {
      const mockPayload = { username: 'testUser', password: 'testPass' };
      (signIn as jest.Mock).mockResolvedValue({ error: 'Invalid credentials' });

      const result = await handleSignIn(mockPayload);
      expect(signIn).toHaveBeenCalledWith('credentials', {
        ...mockPayload,
        redirect: false,
      });
      expect(result).toEqual({ error: 'Invalid credentials' });
    });

    test('should handle unexpected errors during signIn', async () => {
      const mockPayload = { username: 'testUser', password: 'testPass' };
      (signIn as jest.Mock).mockRejectedValue(new Error('Unexpected error'));

      const result = await handleSignIn(mockPayload);
      expect(signIn).toHaveBeenCalledWith('credentials', {
        ...mockPayload,
        redirect: false,
      });
      expect(result).toEqual({
        error: expect.stringContaining('Failed to Sign In:'),
      });
    });
  });

  describe('handleSignOut', () => {
    test('should call signOut with the correct arguments', async () => {
      await handleSignOut();

      expect(signOut).toHaveBeenCalledWith({ redirectTo: `/${ROUTERS.LOGIN}` });
    });
  });
});
