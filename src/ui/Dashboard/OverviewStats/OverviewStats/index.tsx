import { getDataOverview } from '@/service';
import { OverviewItem } from '@/ui';

const OverviewStats = async () => {
  const data = (await getDataOverview()) || [];

  return (
    <div className="flex justify-between w-full pt-11 pb-5xl pl-20 pr-8xl bg-white text-black dark:bg-dark-900">
      {data.length > 0 ? (
        data.map((item, index) => (
          <OverviewItem
            key={index}
            value={item.value}
            label={item.label}
            growth={item.growth}
            isLast={index === data.length - 1}
          />
        ))
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default OverviewStats;
