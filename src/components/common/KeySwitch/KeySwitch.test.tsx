import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import KeySwitch from '.';

describe('KeySwitch component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <KeySwitch
        title="Generate License Keys"
        describe="Issue each customer a unique license key after purchase"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
