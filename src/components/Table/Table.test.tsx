import { render, screen } from '@testing-library/react';
import { rows } from '@/mocks';
import Table from './Table';

describe('Table component', () => {
  const mockProducts = rows;
  test('renders table', () => {
    const { container } = render(<Table products={mockProducts} />);
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of rows', () => {
    render(<Table products={mockProducts} />);

    const rowElements = screen.getAllByRole('row');
    expect(rowElements.length).toBe(mockProducts.length + 1);
  });
});
