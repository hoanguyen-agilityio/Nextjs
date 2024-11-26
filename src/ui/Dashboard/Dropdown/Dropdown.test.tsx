import { render } from '@testing-library/react';
import DropdownIcon from '.';

describe('Dropdown', () => {
  test('renders dropdown', () => {
    const { container } = render(<DropdownIcon id={1} />);
    expect(container).toMatchSnapshot();
  });
});
