import { render } from '@testing-library/react';
import SwitchMode from '.';

describe('Dark Mode Switch component', () => {
  test('renders with default type', () => {
    const { container } = render(<SwitchMode />);
    expect(container).toMatchSnapshot();
  });
});
