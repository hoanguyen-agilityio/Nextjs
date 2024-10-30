import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { rows } from '@/mocks';
import ProductTableWrapper from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ProductTableWrapper Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  test('render product table wrapper', () => {
    const { container } = render(
      <ProductTableWrapper currentPage={10} data={rows} />,
    );
    expect(container).toMatchSnapshot();
  });
});
