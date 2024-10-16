'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EMPTY_TEXT, ROUTERS } from '@/Constant';
import { IProducts } from '@/types';
import { getData } from '@/Services';
import { Table, Pagination } from '@/components';

const ProductTable = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get(ROUTERS.SEARCH) || EMPTY_TEXT;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(searchQuery);
      setData(result || []);
    };

    fetchData();
  }, [searchQuery]);

  return (
    <>
      <Table products={data} />
      <Pagination />
    </>
  );
};

export default ProductTable;
