import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Button component', () => {
  test('renders with default type', () => {
    const { container } = render(<Form modePage="add" label="Test Button" />);
    expect(container).toMatchSnapshot();
  });
});
