import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WalletPage from '../page';

describe('Wallet Page', () => {
  test('renders wallet page', () => {
    const { container } = render(<WalletPage />);
    expect(container).toMatchSnapshot();
  });
});
