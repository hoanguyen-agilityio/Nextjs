import { render, screen, waitFor } from '@testing-library/react';
import Overview from '.';
import { getDataOverview } from '@/actions';

jest.mock('@/actions', () => ({
  getDataOverview: jest.fn(),
}));

describe('Overview Component', () => {
  test('renders Overview with mock data', async () => {
    const { container } = render(await Overview());
    expect(container).toMatchSnapshot();
  });

  test('renders Overview when no data is returned', async () => {
    (getDataOverview as jest.Mock).mockResolvedValue([]);

    const { container } = render(await Overview());

    await waitFor(() => expect(getDataOverview).toHaveBeenCalledTimes(1));

    expect(container).toMatchSnapshot();

    expect(screen.queryByText('Test value 1')).toBeNull();
    expect(screen.queryByText('Label 1')).toBeNull();
  });
});
