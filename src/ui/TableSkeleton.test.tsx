import { render } from '@testing-library/react';
import TableSkeleton from './TableSkeleton';

describe('TableSkeleton UI', () => {
  test('renders table skeleton', () => {
    const { container } = render(<TableSkeleton productCount={10} />);
    expect(container).toMatchSnapshot();
  });
});
