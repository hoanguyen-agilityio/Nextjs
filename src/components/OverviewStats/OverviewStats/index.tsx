import { data } from '@/mocks';
import { OverviewItem } from '@/components';

const OverviewStats = () => (
  <div className="flex justify-between w-full pt-11 pb-5xl pl-20 pr-8xl bg-white text-black dark:bg-dark-900">
    {data.map((item, index) => (
      <OverviewItem
        key={index}
        value={item.value}
        label={item.label}
        growth={item.growth}
        isLast={index === data.length - 1}
      />
    ))}
  </div>
);

export default OverviewStats;