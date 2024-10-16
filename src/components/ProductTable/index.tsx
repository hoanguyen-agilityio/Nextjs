'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EMPTY_TEXT, ROUTERS } from '@/Constant';
import { IProducts } from '@/types';
import { getData } from '@/Services';
import { Table, Pagination } from '@/components';

const ProductTable = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get(ROUTERS.SEARCH) || EMPTY_TEXT;
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(searchQuery);
      if (result) {
        setData(result);
        setTotalItems(result.length);
      }
    };

    fetchData();
  }, [searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  return (
    <>
      <Table
        products={currentItems}
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
