'use client';
import { useRouter } from 'next/navigation';
import { IProducts } from '@/types';
import { Table, Pagination } from '@/components';

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
    <>
      <Table
        products={products}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductTable;
