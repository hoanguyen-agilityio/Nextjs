import { render } from '@testing-library/react';
import Overview from '.';

describe('Overview Component', () => {
  test('render overview', () => {
    const { container } = render(<Overview />);
    expect(container).toMatchSnapshot();
  });
});
