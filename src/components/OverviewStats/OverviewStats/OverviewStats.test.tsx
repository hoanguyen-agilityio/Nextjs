import { render } from '@testing-library/react';
import OverviewStats from '.';

describe('OverviewStats Component', () => {
  test('render overview stats', () => {
    const { container } = render(<OverviewStats />);
    expect(container).toMatchSnapshot();
  });
});
