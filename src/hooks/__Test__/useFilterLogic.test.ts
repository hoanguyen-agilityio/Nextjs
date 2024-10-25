import { renderHook, act } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import useFilterLogic from '@/hooks/useFilterLogic';
import { Item } from '@/types';

// Mock the router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('useFilterLogic', () => {
  const mockItems: Item[] = [
    { key: '1', label: 'Item 1' },
    { key: '2', label: 'Item 2' },
  ];

  const mockPush = jest.fn();
  const mockUseRouter = useRouter as jest.Mock;
  mockUseRouter.mockReturnValue({ push: mockPush });

  beforeEach(() => {
    jest.clearAllMocks();
    window.history.pushState({}, '', '/');
  });

  test('returns the selected item based on the currentFilterKey', () => {
    const { result } = renderHook(() => useFilterLogic(mockItems, '1'));
    expect(result.current.selectedItem).toEqual(mockItems[0]);
  });

  test('updates the filter parameter on handleItemClick', () => {
    const { result } = renderHook(() => useFilterLogic(mockItems, null));
    act(() => {
      result.current.handleItemClick(mockItems[1]);
    });
    expect(mockPush).toHaveBeenCalledWith('?filter=2');
  });

  test('removes the filter parameter on handleCloseButton', () => {
    const { result } = renderHook(() => useFilterLogic(mockItems, '1'));
    act(() => {
      result.current.handleCloseButton();
    });
    expect(mockPush).toHaveBeenCalledWith('?');
  });
});
