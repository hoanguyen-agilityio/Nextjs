import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsPage from '../page';

describe('Analytics Page', () => {
  test('renders analytics page', () => {
    const { container } = render(<AnalyticsPage />);
    expect(container).toMatchSnapshot();
  });
});
