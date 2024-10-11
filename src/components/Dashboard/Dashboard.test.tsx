import { render, screen } from '@testing-library/react';
import Dashboard from '.';
import { rows } from '@/mocks';

describe('Dashboard component', () => {
  const mockProducts = rows;
  test('renders dashboard', () => {
    const { container } = render(<Dashboard products={mockProducts} />);
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of rows', () => {
    render(<Dashboard products={mockProducts} />);

    const rowElements = screen.getAllByRole('row');
    expect(rowElements.length).toBe(mockProducts.length + 1);
  });
});
