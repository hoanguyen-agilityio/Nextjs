import { getData } from '@/Services';
import { Table, Pagination } from '@/components';

const ProductTable = async () => {
  const data = await getData();

  return (
    <>
      <Table products={data || []} />
      <Pagination />
    </>
  );
};

export default ProductTable;
