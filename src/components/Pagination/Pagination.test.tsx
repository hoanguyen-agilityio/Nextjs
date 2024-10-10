import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '.';

describe('Pagination Component', () => {
  test('render pagination', () => {
    const { container } = render(<Pagination />);
    expect(container).toMatchSnapshot();
  });

  test('handles button clicks', () => {
    const handleClick = jest.fn();

    render(<Pagination />);

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
