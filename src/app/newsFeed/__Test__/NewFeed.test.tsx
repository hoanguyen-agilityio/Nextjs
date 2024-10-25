import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsFeedPage from '../page';

describe('News Feed Page', () => {
  test('renders news feed page', () => {
    const { container } = render(<NewsFeedPage />);
    expect(container).toMatchSnapshot();
  });
});
