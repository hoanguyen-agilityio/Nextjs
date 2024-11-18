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

  test('renders images passed in the "data" prop', () => {
    const data = { img: ['image1.jpg', 'image2.jpg'] };
    renderMedia('edit', data);

    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByAltText('Preview 0')).toHaveAttribute(
      'src',
      'image1.jpg',
    );
    expect(screen.getByAltText('Preview 1')).toHaveAttribute(
      'src',
      'image2.jpg',
    );
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
});
