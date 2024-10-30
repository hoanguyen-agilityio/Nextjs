import { filterProducts, paginateProducts } from '@/utils';
import { ProductTable } from '@/ui';
import { IProducts } from '@/types';

interface IProductTableWrapper {
  currentPage: number;
  filter?: string;
  data: IProducts[];
}

const itemsPerPage = 10;

const ProductTableWrapper = ({
  currentPage,
  filter,
  data,
}: IProductTableWrapper) => {
  const safeData = Array.isArray(data) ? data : [];

  const filteredData = filterProducts(safeData, filter);
  const currentItems = paginateProducts(
    filteredData,
    currentPage,
    itemsPerPage,
  );

  return (
    <ProductTable
      products={currentItems}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={filteredData.length}
    />
  );
};

export default ProductTableWrapper;
