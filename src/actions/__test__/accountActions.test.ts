import { signIn, signOut } from '@/configs';
import { ACCOUNT_URL, ROUTERS } from '@/constants';
import { APIs } from '@/services';
import { getAccount, handleSignIn, handleSignOut } from '..';

jest.mock('@/configs', () => ({
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock('@/services', () => ({
  APIs: {
    get: jest.fn(),
  },
}));

describe('Account Actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAccount', () => {
    test('should return account data when API call succeeds', async () => {
      const mockAccounts = [{ id: 1, username: 'testUser' }];
      (APIs.get as jest.Mock).mockResolvedValue(mockAccounts);

      const result = await getAccount();
      expect(APIs.get).toHaveBeenCalledWith(undefined, undefined, ACCOUNT_URL);
      expect(result).toEqual(mockAccounts);
    });

    test('should handle error and return empty array when API call fails', async () => {
      (APIs.get as jest.Mock).mockRejectedValue(new Error('API Error'));

      const result = await getAccount();
      expect(APIs.get).toHaveBeenCalledWith(undefined, undefined, ACCOUNT_URL);
      expect(result).toEqual([]);
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
        error: 'Incorrect username or password',
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
