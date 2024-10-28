import { render } from '@testing-library/react';
import OverviewItem from '.';

describe('OverviewItem Component', () => {
  test('render overview item', () => {
    const { container } = render(
      <OverviewItem
        value="1000"
        label="Total Sales"
        growth="15%"
        isLast={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
