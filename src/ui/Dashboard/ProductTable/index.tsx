'use client';
import { useRouter } from 'next/navigation';
import { IProducts } from '@/types';
import { Table } from '@/components';

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
