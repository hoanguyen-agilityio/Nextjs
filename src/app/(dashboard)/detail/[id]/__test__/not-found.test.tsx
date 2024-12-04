import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../not-found';

describe('Not Found Page', () => {
  test('renders not found page', async () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
