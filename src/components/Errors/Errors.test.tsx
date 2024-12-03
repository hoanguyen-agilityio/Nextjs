import { render, screen } from '@testing-library/react';
import Error from '.';

describe('Error component', () => {
  test('renders error', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });

  test('renders with default message and no reset button', () => {
    render(<Error />);
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

  test('renders with default message and no reset button', () => {
    render(<Error />);
    expect(
      screen.getByText(
        'We apologize for the inconvenience. The page you are looking for might have been removed or is temporarily unavailable.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Go to Home Page')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /reset/i }),
    ).not.toBeInTheDocument();
  });
});
