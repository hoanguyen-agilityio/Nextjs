import { render } from '@testing-library/react';
import ImageCustom from '.';
import { IMAGE } from '@/constants';

describe('Image component', () => {
  test('Image Component With Displayed Image', () => {
    const { container } = render(
      <ImageCustom
        src={IMAGE.DEFAULT}
        width={200}
        height={300}
        alt="Image default"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('Image Component With Displayed fallback image', () => {
    const { container } = render(
      <ImageCustom width={200} height={300} alt="fallback image" />,
    );
    expect(container).toMatchSnapshot();
  });
});
