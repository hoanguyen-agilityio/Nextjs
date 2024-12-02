import { render, screen, fireEvent } from '@testing-library/react';
import { useTheme } from 'next-themes';
import SwitchMode from '.';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('SwitchMode Component', () => {
  let mockSetTheme: jest.Mock;

  beforeEach(() => {
    mockSetTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default type', () => {
    const { container } = render(<SwitchMode />);
    expect(container).toMatchSnapshot();
  });

  test('renders the switch, label, and icon', () => {
    render(<SwitchMode />);

    expect(screen.getByText(/Dark mode/i)).toBeInTheDocument();
    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  test('toggles the theme when the switch is clicked', () => {
    render(<SwitchMode />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});
