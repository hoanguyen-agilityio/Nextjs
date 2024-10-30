import { render } from '@testing-library/react';
import OverviewStats from '.';
import { data } from '@/mocks';

describe('OverviewStats Component', () => {
  test('render overview stats', () => {
    const { container } = render(<OverviewStats data={data} />);
    expect(container).toMatchSnapshot();
  });
});
