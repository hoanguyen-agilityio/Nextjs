import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import File from '.';

const mockOnFilesChange = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('File component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <File onFilesChange={mockOnFilesChange} mode="add" />,
    );
    expect(container).toMatchSnapshot();
  });

  test('should render file upload area in add/edit modes', () => {
    render(<File onFilesChange={mockOnFilesChange} mode="add" />);

    expect(
      screen.getByText(/Drop your files here, or click to browse./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Unlimited files, up to 5 GB./i),
    ).toBeInTheDocument();
  });

  test('should not render file upload area in detail mode', () => {
    render(<File onFilesChange={mockOnFilesChange} mode="detail" />);

    expect(
      screen.queryByText(/Drop your files here, or click to browse./i),
    ).not.toBeInTheDocument();
  });

  test('should allow uploading files from URL', () => {
    render(<File onFilesChange={mockOnFilesChange} mode="add" />);

    fireEvent.click(
      screen.getByText(/Drop your files here, or click to browse./i),
    );
    fireEvent.change(screen.getByPlaceholderText(/Enter file URL/i), {
      target: { value: 'http://example.com/file.pdf' },
    });

    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(mockOnFilesChange).toHaveBeenCalledWith([
      'http://example.com/file.pdf',
    ]);
  });
});
