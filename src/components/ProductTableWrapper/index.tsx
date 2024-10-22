import { getData } from '@/services';
import { ProductTable } from '@/components';

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
  const safeData = allData || [];

  let filteredData = safeData;
  if (filter === 'views_below_5k') {
    filteredData = safeData.filter((item) => Number(item.views) < 5000);
  } else if (filter === 'views_5k_plus') {
    filteredData = safeData.filter((item) => Number(item.views) >= 5000);
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
