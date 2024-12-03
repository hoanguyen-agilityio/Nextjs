import { Suspense } from 'react';
import { ButtonCustom } from '@/components';
import { NewCustomerIcon, RightArrowUp } from '@/icons';
import {
  Filter,
  Overview,
  OverviewSkeleton,
  ProductSearch,
  ProductTableWrapper,
  TableSkeleton,
} from '@/ui';

export const metadata = {
  title: 'Dashboard - Products Overview',
  description:
    'View and manage the list of products, apply filters, and search functionality on the dashboard.',
};

const Homepage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const searchQuery = searchParams.search || '';
  const currentPage = parseInt(searchParams.page || '1', 10);
  const filter = searchParams.filter || '';

  return (
    <div className="pl-7 pr-[50px] pt-5 pb-11">
      <div className="flex md:flex-row justify-between flex-col md:items-center items-start mb-l">
        <h1 className="font-bold text-3xl">Products</h1>
        <div className="flex gap-5 flex-wrap">
          <ButtonCustom
            color="default"
            radius="sm"
            className="h-auto gap-6 cursor-not-allowed"
            size="xs"
            startContent={<RightArrowUp width="14px" height="13px" />}
          >
            Export
          </ButtonCustom>
          <ButtonCustom
            color="primary"
            radius="sm"
            size="xxl"
            className="p-4 h-auto gap-4 text-white dark:text-black-900 cursor-not-allowed"
            startContent={
              <NewCustomerIcon width="26px" height="26px" fill="white" />
            }
          >
            New Customer
          </ButtonCustom>
        </div>
      </div>
      <Suspense fallback={<OverviewSkeleton productCount={4} />}>
        <Overview />
      </Suspense>
      <div className="flex mt-3xl md:flex-row justify-between flex-col md:items-center items-start gap-3 md:gap-0">
        <Filter />
        <ProductSearch />
      </div>
      <Suspense fallback={<TableSkeleton productCount={10} />}>
        <ProductTableWrapper
          searchQuery={searchQuery}
          currentPage={currentPage}
          filter={filter}
        />
      </Suspense>
    </div>
  );
};

export default Homepage;
