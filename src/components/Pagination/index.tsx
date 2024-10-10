import { colors } from '@/themes';
import { ArrowLeft, ArrowRight } from '@/icons';
import { ButtonCustom } from '@/components';

const Pagination = () => (
  <div className="flex justify-between items-center mt-4">
    <ButtonCustom
      color="default"
      radius="md"
      startContent={
        <ArrowLeft width="19px" height="14px" fill={colors.dark[800]} />
      }
      className="p-3 gap-4 font-semibold text-base border-1 border-translucent-100"
    >
      Previous
    </ButtonCustom>
    <span className="text-grayBlue-400 font-semibold">Page 1 of 6</span>
    <ButtonCustom
      color="default"
      radius="md"
      endContent={
        <ArrowRight width="19px" height="14px" fill={colors.dark[800]} />
      }
      className="p-3 gap-4 font-semibold text-base border-1 border-translucent-100"
    >
      Next
    </ButtonCustom>
  </div>
);

export default Pagination;
