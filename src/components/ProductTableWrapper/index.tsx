import { getData } from '@/Services';
import ProductTable from '../ProductTable';

interface IProductTableWrapper {
  searchQuery: string;
  currentPage: number;
}

const itemsPerPage = 10;

const ProductTableWrapper = async ({
  searchQuery,
  currentPage,
}: IProductTableWrapper) => {
  const allData = await getData(searchQuery);
  const safeData = allData || [];
  const totalItems = safeData.length;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = safeData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <ProductTable
      products={currentItems}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
    />
  );
};

export default ProductTableWrapper;
