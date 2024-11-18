import { render } from '@testing-library/react';
import ModelDeleteProduct from '.';

const mockOnOpenChange = jest.fn();

describe('ModelDeleteProduct Component', () => {
  test('render Sidebar', () => {
    const { container } = render(
      <ModelDeleteProduct
        isOpen={true}
        id="1"
        onOpenChange={mockOnOpenChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
