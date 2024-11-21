import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpPage from './page';

describe('Sign Up page', () => {
  test('renders sign up page', () => {
    const { container } = render(<SignUpPage />);
    expect(container).toMatchSnapshot();
  });
});
