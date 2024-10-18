import { render } from '@testing-library/react';
import Error from '.';

describe('Error component', () => {
  test('renders error', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});
