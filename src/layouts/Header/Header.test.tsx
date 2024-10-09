import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Layout', () => {
  test('render header', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test('renders search input', () => {
    render(<Header />);

    const searchPlaceholder = screen.getByPlaceholderText('search');
    expect(searchPlaceholder).toBeInTheDocument();
  });

  test('renders user information', () => {
    render(<Header />);

    const userName = screen.getByText('Theo Edwards');
    expect(userName).toBeInTheDocument();
    const userRole = screen.getByText('Administrator');
    expect(userRole).toBeInTheDocument();
  });
});
