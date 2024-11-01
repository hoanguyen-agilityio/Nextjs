import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SettingsPage from '../page';

describe('Settings Page', () => {
  test('renders settings page', () => {
    const { container } = render(<SettingsPage />);
    expect(container).toMatchSnapshot();
  });
});
