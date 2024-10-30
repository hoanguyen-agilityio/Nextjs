import { getData } from '@/service';
import { filterProducts, paginateProducts } from '@/utils';
import { ProductTable } from '@/ui';

interface IProductTableWrapper {
  searchQuery: string;
  currentPage: number;
  filter?: string;
}

const itemsPerPage = 10;

const ProductTableWrapper = async ({
  searchQuery,
  currentPage,
  filter,
}: IProductTableWrapper) => {
  const allData = await getData(searchQuery);
  const safeData = Array.isArray(allData) ? allData : [];

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
