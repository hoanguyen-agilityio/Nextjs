import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfilePage from '../page';

describe('Profile Page', () => {
  test('renders profile page', () => {
    const { container } = render(<ProfilePage />);
    expect(container).toMatchSnapshot();
  });
});
