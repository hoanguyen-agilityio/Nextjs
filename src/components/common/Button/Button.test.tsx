import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'next-themes';
import ButtonCustom from '.';

describe('Button component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <ButtonCustom color="default" size="xs" radius="sm">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the button with custom color variant (primary) in dark mode', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        {' '}
        {/* Add ThemeProvider here */}
        <ButtonCustom color="primary">Primary Button</ButtonCustom>
      </ThemeProvider>,
    );
    const button = screen.getByRole('button', { name: /Primary Button/i });

    // Check if the button has dark mode classes applied
    expect(button).toHaveClass('dark:bg-blue-500');
    expect(button).toHaveClass('dark:border-blue-500');
  });

  test('renders the disabled button', () => {
    render(<ButtonCustom isDisabled={true}>Disabled Button</ButtonCustom>);
    const button = screen.getByRole('button', { name: /Disabled Button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
  });
});
