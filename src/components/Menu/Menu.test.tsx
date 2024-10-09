import { render, screen } from '@testing-library/react';
import Menu from '.';

describe('Menu Component', () => {
  test('render menu', () => {
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });

  test('renders menu items correctly', () => {
    render(<Menu />);

    const menuItem1 = screen.getByText('Dashboard');
    const menuItem2 = screen.getByText('Inbox');

    expect(menuItem1).toBeInTheDocument();
    expect(menuItem2).toBeInTheDocument();
  });
});
