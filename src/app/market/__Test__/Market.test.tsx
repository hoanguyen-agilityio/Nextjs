import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarketPage from '../page';

describe('Market Page', () => {
  test('renders market page', () => {
    const { container } = render(<MarketPage />);
    expect(container).toMatchSnapshot();
  });
});
