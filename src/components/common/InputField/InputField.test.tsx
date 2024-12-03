import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '.';

describe('InputField component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <InputField
        label="InputField Test"
        errorMsg="Error message"
        fieldId="1"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
