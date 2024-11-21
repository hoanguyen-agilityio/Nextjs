import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams } from 'next/navigation';
import OverviewDetail from '.';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('UI OverviewDetail', () => {
  test('renders Overview Detail', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    const { container } = render(<OverviewDetail />);
    expect(container).toMatchSnapshot();
  });
});
