'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getData } from '@/Services';
import { Table, Pagination } from '@/components';
import { IProducts } from '@/types';

const ProductTable = () => {
  const [data, setData] = useState<IProducts[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

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
