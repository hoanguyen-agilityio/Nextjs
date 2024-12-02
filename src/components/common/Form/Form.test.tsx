import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('Form component', () => {
  const mockOnSubmit = jest.fn();
  const mockData = {
    id: '1',
    name: 'Sample Product',
    status: 'Available',
    total: '100',
    views: '50',
    sales: '10',
    conversion: '20%',
    download: 'Download Now',
    link: 'example.com',
    personal: 'Thank you for purchasing!',
    img: ['image1.jpg', 'image2.jpg'],
    file: [],
  };
  test('renders with default type', () => {
    const { container } = render(<Form modePage="add" label="Test Button" />);
    expect(container).toMatchSnapshot();
  });

  test('renders the form with provided data in "edit" mode', () => {
    render(
      <Form
        modePage="edit"
        label="Update Product"
        data={mockData}
        onSubmit={mockOnSubmit}
        id="1"
      />,
    );

    expect(screen.getByLabelText(/Name \*/)).toHaveValue(mockData.name);
    expect(screen.getByLabelText(/Description/)).toHaveValue(mockData.status);
    expect(screen.getByLabelText(/Price \*/)).toHaveValue(mockData.total);
    expect(screen.getByLabelText(/View/)).toHaveValue(mockData.views);
    expect(screen.getByLabelText(/Sales/)).toHaveValue(mockData.sales);
    expect(screen.getByLabelText(/Conversion/)).toHaveValue(
      mockData.conversion,
    );
    expect(screen.getByLabelText(/Download Button/)).toHaveValue(
      mockData.download,
    );
    expect(screen.getByLabelText(/Product Link/)).toHaveValue(mockData.link);
    expect(screen.getByLabelText(/Personal Note/)).toHaveValue(
      mockData.personal,
    );
  });
});
