import { render } from '@testing-library/react';
import ProductSearch from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ProductSearch Component', () => {
  test('render product search', () => {
    const { container } = render(<ProductSearch />);
    expect(container).toMatchSnapshot();
  });
});
