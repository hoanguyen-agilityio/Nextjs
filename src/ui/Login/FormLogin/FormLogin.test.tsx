import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormLogin from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Form login component', () => {
  const mockOnSignIn = jest.fn();

  beforeEach(() => {
    mockOnSignIn.mockClear();
  });
  test('renders form login', () => {
    const { container } = render(<FormLogin onSignIn={mockOnSignIn} />);
    expect(container).toMatchSnapshot();
  });
});
