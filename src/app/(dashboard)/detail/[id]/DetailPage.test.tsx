import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'next/navigation';
import DetailPage from './page';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Detail page', () => {
  test('renders detail page', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    const { container } = render(<DetailPage />);
    expect(container).toMatchSnapshot();
  });
});
