import { render } from '@testing-library/react';
import { data } from '@/mocks';
import OverviewStats from '.';

describe('OverviewStats Component', () => {
  test('render overview stats', () => {
    const { container } = render(<OverviewStats data={data} />);
    expect(container).toMatchSnapshot();
  });
});
