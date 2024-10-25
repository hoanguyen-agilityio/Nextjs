import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArchivePage from '../page';

describe('Archive Page', () => {
  test('renders archive page', () => {
    const { container } = render(<ArchivePage />);
    expect(container).toMatchSnapshot();
  });
});
