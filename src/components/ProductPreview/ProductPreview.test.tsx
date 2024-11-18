import { render } from '@testing-library/react';
import ProductPreview from '.';

describe('ProductPreview component', () => {
  const props = {
    imageSrc: 'https://via.placeholder.com/493x240',
    imageAlt: 'Product Image',
    imageFallbackSrc: 'https://via.placeholder.com/493x240?text=Fallback',
    price: '$99.99',
  };
  test('renders ProductPreview', () => {
    const { container } = render(<ProductPreview {...props} />);
    expect(container).toMatchSnapshot();
  });
});
