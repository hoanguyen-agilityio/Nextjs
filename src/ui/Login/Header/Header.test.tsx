import { render } from '@testing-library/react';
import Header from '@/layouts/Header';

describe('Header Component', () => {
  test('render Sidebar', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
