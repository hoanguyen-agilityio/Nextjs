import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChipCustom from '.';

describe('Button component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <ChipCustom color="success" size="sm">
        Chip Custom
      </ChipCustom>,
    );
    expect(container).toMatchSnapshot();
  });
});
