import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorDetailPage from '../error';

describe('ErrorDetailPage Component', () => {
  test('renders ErrorDetailPage correctly', () => {
    const mockReset = jest.fn();
    const mockError = {
      message: 'An unexpected error occurred.',
      name: 'Error',
      stack: 'Error stack trace',
      digest: 'unique-digest',
    };

    const { asFragment } = render(
      <ErrorDetailPage error={mockError} reset={mockReset} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
