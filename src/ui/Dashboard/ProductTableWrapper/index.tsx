// API
import { getDataProducts } from '@/actions';

// Helpers
import { filterProducts, paginateProducts } from '@/utils';

// Components
import { ProductTable } from '@/ui';

interface IProductTableWrapper {
  searchQuery: string;
  currentPage: number;
  filter?: string;
}

const itemsPerPage = 10;

const ProductTableWrapper = async ({
  currentPage,
  filter,
  searchQuery,
}: IProductTableWrapper) => {
  const allData = await getDataProducts(searchQuery);
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
