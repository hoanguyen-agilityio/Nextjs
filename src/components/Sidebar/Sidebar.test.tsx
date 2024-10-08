import { render, screen } from '@testing-library/react';
import Sidebar from '.';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    const { container } = render(<Sidebar />);
    expect(container).toMatchSnapshot();
  });
  test('renders Sidebar correctly', () => {
    render(<Sidebar />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
  });

  test('navigates to the correct link when clicked', () => {
    render(<Sidebar />);

    screen.getByText('Dashboard').click();
    expect(window.location.pathname).toBe('/');
  });
});
