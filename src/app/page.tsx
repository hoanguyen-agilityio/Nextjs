import { Suspense } from 'react';
import { colors } from '@/themes';
import {
  ButtonCustom,
  Overview,
  ProductSearch,
  ProductTableWrapper,
} from '@/components';
import { CloseIcon, FilterIcon, NewCustomerIcon, RightArrowUp } from '@/icons';
import { TableSkeleton } from '@/ui';

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
      <Overview />
      <div className="flex justify-between items-center mt-3xl">
        <div className="flex">
          <ButtonCustom
            color="info"
            radius="sm"
            endContent={
              <CloseIcon width="12px" height="12px" fill={colors.blue[400]} />
            }
            className="text-xsm text-blue-400 font-semibold h-auto py-4 pr-4 pl-5 gap-lg mr-5"
          >
            All time
          </ButtonCustom>
          <ButtonCustom
            color="info"
            radius="sm"
            endContent={
              <CloseIcon width="12px" height="12px" fill={colors.blue[400]} />
            }
            className="text-xsm text-blue-400 font-semibold h-auto py-4 pr-4 pl-5 gap-5 mr-5"
          >
            Paid
          </ButtonCustom>
          <ButtonCustom
            color="info"
            radius="sm"
            endContent={
              <CloseIcon width="12px" height="12px" fill={colors.blue[400]} />
            }
            className="text-xsm text-blue-400 font-semibold h-auto py-4 pr-4 pl-5 gap-lg mr-5"
          >
            Premium
          </ButtonCustom>
          <ButtonCustom
            color="default"
            size="xs"
            radius="sm"
            startContent={<FilterIcon width="18px" height="16px" />}
            className="h-auto gap-4"
          >
            Filter
          </ButtonCustom>
        </div>
        <ProductSearch />
      </div>
      <Suspense fallback={<TableSkeleton productCount={10} />}>
        <ProductTableWrapper
          searchQuery={searchQuery}
          currentPage={currentPage}
        />
      </Suspense>
    </div>
  );
};

export default Homepage;
