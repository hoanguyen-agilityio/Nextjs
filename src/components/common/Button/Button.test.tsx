import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonCustom from '.';

describe('Button component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <ButtonCustom color="default" size="xs" radius="sm">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with secondary type', () => {
    const { container } = render(
      <ButtonCustom color="secondary" size="s" radius="md">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with primary type', () => {
    const { container } = render(
      <ButtonCustom color="secondary" size="md">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with info type', () => {
    const { container } = render(
      <ButtonCustom color="info" size="l">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with dark type', () => {
    const { container } = render(
      <ButtonCustom color="dark" size="xl">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with grey type', () => {
    const { container } = render(
      <ButtonCustom color="grey" size="xxl">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with bright type', () => {
    const { container } = render(
      <ButtonCustom color="bright">Button</ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with unstyled type', () => {
    const { container } = render(
      <ButtonCustom color="unstyled" size="unstyled">
        Button
      </ButtonCustom>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders the disabled button', () => {
    render(<ButtonCustom isDisabled={true}>Disabled Button</ButtonCustom>);
    const button = screen.getByRole('button', { name: /Disabled Button/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
  });
});
