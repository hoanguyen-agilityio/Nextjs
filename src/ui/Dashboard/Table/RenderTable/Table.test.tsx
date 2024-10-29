import { render, screen } from '@testing-library/react';
import { rows } from '@/mocks';
import Table from '.';

describe('Table component', () => {
  const mockProducts = rows;
  const currentPage = 1;
  const itemsPerPage = 10;
  const totalItems = mockProducts.length;

  const mockOnPageChange = jest.fn();

  test('renders table', () => {
    const { container } = render(
      <Table
        products={mockProducts}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={mockOnPageChange}
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
        totalItems={totalItems}
        onPageChange={mockOnPageChange}
      />,
    );

    const rowElements = screen.getAllByRole('row');
    expect(rowElements.length).toBe(mockProducts.length + 1);
  });
});
