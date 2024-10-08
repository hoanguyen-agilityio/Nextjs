import { render } from '@testing-library/react';
import DarkModeSwitch from '.';

describe('Dark Mode Switch component', () => {
  test('renders with default type', () => {
    const { container } = render(<DarkModeSwitch />);
    expect(container).toMatchSnapshot();
  });
});
