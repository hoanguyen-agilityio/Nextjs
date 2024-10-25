import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InboxPage from '../page';

describe('Inbox Page', () => {
  test('renders inbox page', () => {
    const { container } = render(<InboxPage />);
    expect(container).toMatchSnapshot();
  });
});
