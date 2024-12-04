'use client';
// Third party
import { useRouter } from 'next/navigation';

// Models
import { IProducts } from '@/types';

// Components
import { Table } from '@/ui';

interface IProductTable {
  products: IProducts[];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

const ProductTable = ({
  products,
  currentPage,
  itemsPerPage,
  totalItems,
}: IProductTable) => {
  const router = useRouter();
  const handlePageChange = (page: number) => {
    // Get current URL parameters
    const params = new URLSearchParams(window.location.search);

    // Set the new page
    params.set('page', page.toString());

    // Push the updated URL with all existing parameters and the new page value
    router.push(`?${params.toString()}`);
  };

  return (
    <Table
      products={products}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
      onPageChange={handlePageChange}
      data={products}
    />
  );
};

export default ProductTable;
