import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddPage from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Add page', () => {
  test('renders add page', () => {
    const { container } = render(<AddPage />);
    expect(container).toMatchSnapshot();
  });
});
