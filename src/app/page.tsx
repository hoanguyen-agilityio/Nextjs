import { Suspense } from 'react';
import {
  ButtonCustom,
  Filter,
  Overview,
  ProductSearch,
  ProductTableWrapper,
} from '@/components';
import { NewCustomerIcon, RightArrowUp } from '@/icons';
import { OverviewSkeleton, TableSkeleton } from '@/ui';

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
      <div className="flex justify-between items-center mb-l">
        <h1 className="font-bold text-3xl">Products</h1>
        <div className="flex">
          <ButtonCustom
            color="default"
            radius="sm"
            className="mr-5 h-auto gap-6"
            size="xs"
            startContent={<RightArrowUp width="14px" height="13px" />}
          >
            Export
          </ButtonCustom>
          <ButtonCustom
            color="primary"
            radius="sm"
            className="p-4 h-auto gap-4 text-xsm font-semibold text-white dark:text-black-900"
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
      <div className="flex justify-between items-center mt-3xl">
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
