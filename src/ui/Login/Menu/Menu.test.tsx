import { render } from '@testing-library/react';
import Menu from '.';

describe('Menu Component', () => {
  test('render Sidebar', () => {
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
