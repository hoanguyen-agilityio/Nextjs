import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '.';

describe('Button component', () => {
  test('renders with default type', () => {
    const { container } = render(<Form modePage="add" label="Test Button" />);
    expect(container).toMatchSnapshot();
  });
});
