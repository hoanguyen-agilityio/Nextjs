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
    router.push(`?page=${page}`);
  };

  return (
    <Table
      products={products}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalItems={totalItems}
      onPageChange={handlePageChange}
    />
  );
};

export default ProductTable;
