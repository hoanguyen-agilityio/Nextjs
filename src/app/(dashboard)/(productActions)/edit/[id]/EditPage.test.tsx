import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'next/navigation';
import EditPage from './page';

// Mock the necessary modules
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));
jest.mock('@/services', () => ({
  APIs: {
    get: jest.fn(() =>
      Promise.resolve({ img: [], name: 'Test Product', id: '1', total: '100' }),
    ),
  },
}));

describe('Edit page', () => {
  test('renders edit page', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    const { container } = render(<EditPage />);
    expect(container).toMatchSnapshot();
  });
});
