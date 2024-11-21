import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Login page', () => {
  test('renders login page', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });
});
