import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { items } from '@/mocks';
import Filter from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('Filter component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });
  });

  test('renders filter', () => {
    const { container } = render(<Filter />);
    expect(container).toMatchSnapshot();
  });

  test('displays dropdown items when clicked', () => {
    render(<Filter />);

    fireEvent.click(screen.getByText('Filter'));

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });
});
