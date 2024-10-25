import { render } from '@testing-library/react';
import RenderSelect from './RenderSelect';

describe('Select Component', () => {
  const defaultProps = {
    defaultSelectedKey: 'key1',
    items: [
      { key: 'key1', label: 'Item 1' },
      { key: 'key2', label: 'Item 2' },
    ],
    className: 'custom-class',
    ariaLabel: 'Select an option',
  };
  test('render select', () => {
    const { container } = render(<RenderSelect {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
