import { render, screen } from '@testing-library/react';
import { rows } from '@/mocks';
import Table from './Table';

describe('Table component', () => {
  const mockProducts = rows;
  const currentPage = 1;
  const itemsPerPage = 10;
  test('renders table', () => {
    const { container } = render(
      <Table
        products={mockProducts}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of rows', () => {
    render(
      <Table
        products={mockProducts}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />,
    );

    const rowElements = screen.getAllByRole('row');
    expect(rowElements.length).toBe(mockProducts.length + 1);
  });
});
