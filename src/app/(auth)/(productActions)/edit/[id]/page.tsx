import { ButtonCustom } from '@/components';
import { NewCustomerIcon, RightArrowUp } from '@/icons';
import { OverviewEditProduct } from '@/ui';

const EditPage = () => {
  return (
    <main className="pb-[52px] pl-7 pr-[50px] pt-5">
      <div className="flex justify-between items-center mb-l">
        <h1 className="font-bold text-3xl">Detail</h1>
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
            color="dark"
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
      <OverviewEditProduct />
    </main>
  );
};

export default EditPage;
