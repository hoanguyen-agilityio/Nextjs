'use client';
import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { EMPTY_TEXT, ROUTERS } from '@/Constant';
import { IProducts } from '@/types';
import { getData } from '@/Services';
import { Table, Pagination } from '@/components';

const ProductTable = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get(ROUTERS.SEARCH) || EMPTY_TEXT;
  const itemsPerPage = 10;

  const fetchData = async (query: string) => {
    const result = await getData(query);
    return result || [];
  };

  useMemo(() => {
    let fetchedData: IProducts[] = [];
    fetchData(searchQuery).then((result) => {
      fetchedData = result;
      setData(fetchedData);
    });
    return fetchedData;
  }, [searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = data.length;

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
