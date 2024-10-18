import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { rows } from '@/mocks';
import ProductTable from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ProductSearch Component', () => {
  beforeEach(() => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });
  test('render product search', () => {
    const { container } = render(
      <ProductTable
        products={rows}
        currentPage={1}
        itemsPerPage={10}
        totalItems={20}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
