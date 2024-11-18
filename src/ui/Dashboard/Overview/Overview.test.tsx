import { render } from '@testing-library/react';
import Overview from '.';

describe('Overview Component', () => {
  test('renders Overview with mock data', async () => {
    const { container } = render(await Overview());
    expect(container).toMatchSnapshot();
  });
});
