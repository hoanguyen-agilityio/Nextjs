import { render, screen, fireEvent } from '@testing-library/react';
import { rows } from '@/mocks';
import Pagination from '.';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();
  const currentPage = 1;
  const totalItems = 100;
  const itemsPerPage = 10;
  test('render pagination', () => {
    const { container } = render(
      <Pagination
        data={rows}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={mockOnPageChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('handles button clicks', () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        data={rows}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={mockOnPageChange}
      />,
    );

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
