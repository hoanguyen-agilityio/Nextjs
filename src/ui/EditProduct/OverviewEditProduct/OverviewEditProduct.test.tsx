import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'next/navigation';
import OverviewEditProduct from '.';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('UI OverviewEditProduct', () => {
  test('renders Overview Edit Product', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    const { container } = render(<OverviewEditProduct />);
    expect(container).toMatchSnapshot();
  });
});
