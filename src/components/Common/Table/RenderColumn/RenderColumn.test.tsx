import { render } from '@testing-library/react';
import { RenderColumn } from '..';
import { TableRowCustomProps } from '@/types';

describe('renderColumn', () => {
  const baseProps = {
    item: {
      key: '1',
      name: 'Product 1',
      status: 'Active',
      views: '100',
      sales: '10',
      conversion: '5%',
      total: '$100',
    },
    index: 0,
    currentPage: 1,
    itemsPerPage: 10,
  };

  test('renders column "no" correctly', () => {
    const { container } = render(
      RenderColumn('no', baseProps as TableRowCustomProps),
    );
    expect(container).toMatchSnapshot();
  });

  test('renders column "name" correctly', () => {
    const { container } = render(
      RenderColumn('name', baseProps as TableRowCustomProps),
    );
    expect(container).toMatchSnapshot();
  });

  test('renders column "img" correctly', () => {
    const { container } = render(
      RenderColumn('img', baseProps as TableRowCustomProps),
    );
    expect(container).toMatchSnapshot();
  });

  test('renders column "status" correctly', () => {
    const { container } = render(
      RenderColumn('status', baseProps as TableRowCustomProps),
    );
    expect(container).toMatchSnapshot();
  });

  test('renders column "details" correctly', () => {
    const { container } = render(
      RenderColumn('details', baseProps as TableRowCustomProps),
    );
    expect(container).toMatchSnapshot();
  });

  test('renders default case for column correctly', () => {
    const { container } = render(
      RenderColumn('unknown', baseProps as TableRowCustomProps),
    );
    expect(container).toMatchSnapshot();
  });
});
