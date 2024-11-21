import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OverviewEditProduct from '.';
import { useParams } from 'next/navigation'; // Import useParams

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('UI OverviewEditProduct', () => {
  test('renders Overview Edit Product', () => {
    // Provide a mock for useParams
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    const { container } = render(<OverviewEditProduct />);
    expect(container).toMatchSnapshot();
  });
});
