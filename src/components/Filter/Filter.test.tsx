import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '.';
import { items } from '@/mocks';

describe('Filter component', () => {
  test('renders filter', () => {
    const { container } = render(<Filter />);
    expect(container).toMatchSnapshot();
  });

  test('displays dropdown items when clicked', () => {
    render(<Filter />);

    fireEvent.click(screen.getByText('Filter'));

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });
});
