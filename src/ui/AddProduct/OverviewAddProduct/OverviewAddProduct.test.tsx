import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OverviewAddProduct from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('UI OverviewAddProduct', () => {
  test('renders Overview Add Product', () => {
    const { container } = render(<OverviewAddProduct />);
    expect(container).toMatchSnapshot();
  });
});
