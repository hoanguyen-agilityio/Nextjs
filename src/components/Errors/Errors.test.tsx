import { render, screen, fireEvent } from '@testing-library/react';
import Error from '.';

describe('Error component', () => {
  test('renders error', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });

  test('renders with default message and no reset button', () => {
    render(<Error />);
    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Go to Home Page')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /reset/i }),
    ).not.toBeInTheDocument();
  });

  test('renders with custom message', () => {
    const customMessage = 'A custom error occurred.';
    render(<Error message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
    expect(screen.getByText('Go to Home Page')).toBeInTheDocument();
  });

  test('renders with reset button when onReset is provided', () => {
    const onReset = jest.fn();
    render(<Error onReset={onReset} />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
    fireEvent.click(resetButton);
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
