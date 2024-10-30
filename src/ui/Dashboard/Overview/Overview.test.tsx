import { render } from '@testing-library/react';
import { data } from '@/mocks';
import Overview from '.';

describe('Overview Component', () => {
  test('render overview', () => {
    const { container } = render(<Overview data={data} />);
    expect(container).toMatchSnapshot();
  });
});
