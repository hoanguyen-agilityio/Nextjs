import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ROUTERS } from '@/constants';
import { handleSearch } from '../searchUtils';

describe('handleSearch', () => {
  let mockRouter: jest.Mocked<AppRouterInstance>;

  beforeEach(() => {
    mockRouter = {
      push: jest.fn(),
    } as unknown as jest.Mocked<AppRouterInstance>;
  });

  test('navigates to search page with query parameter when query is provided', () => {
    const query = 'test search';
    handleSearch(query, mockRouter);

    expect(mockRouter.push).toHaveBeenCalledWith(
      `?search=${encodeURIComponent(query)}`,
    );
  });

  test('navigates to home when query is empty or only whitespace', () => {
    const query = '   ';
    handleSearch(query, mockRouter);

    expect(mockRouter.push).toHaveBeenCalledWith(ROUTERS.HOME);
  });

  test('does not navigate if query is null or undefined', () => {
    handleSearch('', mockRouter);
    expect(mockRouter.push).toHaveBeenCalledWith(ROUTERS.HOME);

    handleSearch(' ', mockRouter);
    expect(mockRouter.push).toHaveBeenCalledWith(ROUTERS.HOME);
  });
});
