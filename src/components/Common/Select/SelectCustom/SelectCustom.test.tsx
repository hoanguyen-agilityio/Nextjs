import { render } from '@testing-library/react';
import SelectCustom from '.';

describe('Select Component', () => {
  test('render select', () => {
    const { container } = render(<SelectCustom />);
    expect(container).toMatchSnapshot();
  });
});
