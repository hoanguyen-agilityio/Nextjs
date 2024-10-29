import { dateDicker, productSelector } from '@/mocks';
import { OverviewStats, RenderSelect } from '@/ui';
import { CalendarIcon } from '@/icons';

const Overview = () => (
  <section className="w-full rounded-lg bg-white dark:bg-dark-900">
    <div className="flex pt-5 pl-5">
      <div className="pl-lg pr-5 py-3 rounded-lg flex justify-between  border-1 border-gray-50 w-s cursor-pointer dark:border-gray-700">
        <CalendarIcon width="20px" height="21px" fill="black" />
        <span className="font-semibold text-sm">12/12/2022 - 12/20/2022</span>
      </div>
      <RenderSelect
        defaultSelectedKey="weekly"
        items={dateDicker}
        className="w-[120px]"
        ariaLabel="date selector"
      />
      <RenderSelect
        defaultSelectedKey="allProducts"
        items={productSelector}
        className="w-[152px]"
        ariaLabel="product selector"
      />
    </div>
    <OverviewStats />
  </section>
);

export default Overview;
