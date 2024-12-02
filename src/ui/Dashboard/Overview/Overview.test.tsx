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
    // Arrange: Mock the API to return an empty array (no data)
    (getDataOverview as jest.Mock).mockResolvedValue([]);

    // Act: Render the component
    const { container } = render(await Overview());

    // Wait for the data to be fetched and the component to render
    await waitFor(() => expect(getDataOverview).toHaveBeenCalledTimes(1));

    // Assert: Check the snapshot
    expect(container).toMatchSnapshot();

    // Optionally, check if no data is displayed
    expect(screen.queryByText('Test value 1')).toBeNull();
    expect(screen.queryByText('Label 1')).toBeNull();
  });
});
