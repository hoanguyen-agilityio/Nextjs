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
});
