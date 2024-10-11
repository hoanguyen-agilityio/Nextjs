import {
  ButtonCustom,
  Overview,
  Pagination,
  SearchCustom,
  Table,
} from '@/components';
import {
  CloseIcon,
  FilterIcon,
  NewCustomerIcon,
  RightArrowUp,
  SearchIcon,
} from '@/icons';
import { rows } from '@/mocks';
import { colors } from '@/themes';

const Homepage = () => {
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
            startContent={
              <RightArrowUp
                width="14px"
                height="13px"
                fill={colors.dark[800]}
              />
            }
          >
            Export
          </ButtonCustom>
          <ButtonCustom
            color="primary"
            radius="sm"
            className="p-4 h-auto gap-4 text-xsm font-semibold text-white"
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
            startContent={
              <FilterIcon width="18px" height="16px" fill="black" />
            }
            className="h-auto gap-4"
          >
            Filter
          </ButtonCustom>
        </div>
        <SearchCustom
          color="secondary"
          placeholder="search"
          size="md"
          radius="xs"
          startContent={
            <SearchIcon
              width="21px"
              height="21px"
              className="mr-5 cursor-pointer"
            />
          }
        />
      </div>
      <Table products={rows} />
      <Pagination />
    </div>
  );
};

export default Homepage;
