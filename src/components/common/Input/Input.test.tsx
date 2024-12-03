import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputCustom from '.';
import { SearchIcon } from '@/icons';

describe('Search component', () => {
  test('renders with default type', () => {
    const { container } = render(
      <InputCustom
        color="default"
        placeholder="search"
        size="xs"
        radius="xs"
        startContent={
          <SearchIcon
            width="21px"
            height="21px"
            className="mr-5 cursor-pointer"
          />
        }
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with secondary type', () => {
    const { container } = render(<InputCustom color="secondary" size="md" />);
    expect(container).toMatchSnapshot();
  });

  test('render with size xl', () => {
    const { container } = render(<InputCustom size="xl" />);
    expect(container).toMatchSnapshot();
  });

  test('render with size xxl', () => {
    const { container } = render(<InputCustom size="xxl" />);
    expect(container).toMatchSnapshot();
  });

  test('render with size 3xl', () => {
    const { container } = render(<InputCustom size="3xl" />);
    expect(container).toMatchSnapshot();
  });
});
