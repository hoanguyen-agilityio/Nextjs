import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxCustom from '.';

describe('CheckboxCustom component', () => {
  test('renders with default type', () => {
    const { container } = render(<CheckboxCustom size="default" />);
    expect(container).toMatchSnapshot();
  });
});
