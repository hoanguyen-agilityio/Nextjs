import { render, fireEvent, screen } from '@testing-library/react';
import Media from '.';

describe('Media Component', () => {
  const mockOnImagesChange = jest.fn();

  const renderMedia = (
    mode: 'add' | 'edit' | 'detail',
    data?: { img: string[] },
  ) =>
    render(
      <Media mode={mode} onImagesChange={mockOnImagesChange} data={data} />,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default type', () => {
    const { container } = render(<Media mode="add" />);
    expect(container).toMatchSnapshot();
  });

  test('does not render the upload area in "detail" mode', () => {
    renderMedia('detail');
    expect(
      screen.queryByText(/Drop your images here/i),
    ).not.toBeInTheDocument();
  });

  test('displays modal when the upload area is clicked', () => {
    renderMedia('add');

    fireEvent.click(screen.getByText(/Drop your images here/i));

    expect(screen.getByText(/Add Image/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter image URL')).toBeInTheDocument();
  });

  test('closes modal on "Cancel" button click', () => {
    renderMedia('add');

    fireEvent.click(screen.getByText(/Drop your images here/i));
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);

    expect(screen.queryByText(/Add Image/i)).not.toBeInTheDocument();
  });

  test('renders correctly in "add" mode with no initial data', () => {
    const { container } = renderMedia('add');
    expect(container).toMatchSnapshot();
    expect(screen.getByText(/Drop your images here/i)).toBeInTheDocument();
  });

  test('renders images passed in the "data" prop', () => {
    const data = { img: ['image1.jpg', 'image2.jpg'] };
    renderMedia('edit', data);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'image1.jpg');
    expect(images[1]).toHaveAttribute('src', 'image2.jpg');
  });
});
