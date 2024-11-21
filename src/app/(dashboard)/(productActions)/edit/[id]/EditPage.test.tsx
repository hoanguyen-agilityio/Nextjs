import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'next/navigation';
import EditPage from './page';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Edit page', () => {
  test('renders edit page', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    const { container } = render(<EditPage />);
    expect(container).toMatchSnapshot();
  });
});
