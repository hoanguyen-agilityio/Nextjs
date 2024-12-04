import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditPage from '../page';
import { useParams } from 'next/navigation';

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

describe('EditPage Component', () => {
  test('renders the EditPage correctly', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    const mockParamsPromise = Promise.resolve({ id: '1' });

    const { asFragment } = render(
      await EditPage({
        params: mockParamsPromise,
      }),
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
